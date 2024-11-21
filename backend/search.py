import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import NearestNeighbors
import numpy as np
from scipy import sparse
import joblib

jazz_df = pd.read_csv('jazz2.csv').fillna('')
meta_df = pd.read_csv('meta.csv').fillna('')

jazz_df = jazz_df.merge(meta_df,on='url')

vectorizer = joblib.load('vectorizer.pkl')
vectors = sparse.load_npz('jazz.npz')
dense_vectors = vectors.todense().tolist()

nbrs = NearestNeighbors(n_neighbors=24,algorithm='brute',radius=2)
nbrs.fit(dense_vectors)

names = np.load('names.npy',allow_pickle=True)

term_df = pd.DataFrame(dense_vectors,columns=names)

def jazz_search(search_string):
    
    distances,indices = nbrs.kneighbors(vectorizer.transform([search_string]))
    mask = distances[0] < 2
    inds = indices[0][mask]
        
    ret_df = jazz_df.iloc[inds][['url','title','image_url','pagetype','genre']]
    
    return {'records': ret_df.to_records().tolist()}