import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import NearestNeighbors
import numpy as np
from scipy import sparse
import joblib

jazz_df = pd.read_csv('jazz2.csv')

vectorizer = joblib.load('vectorizer.pkl')
vectors = sparse.load_npz('jazz.npz')
dense_vectors = vectors.todense().tolist()

nbrs = NearestNeighbors(n_neighbors=10,algorithm='brute')
nbrs.fit(dense_vectors)

names = np.load('names.npy',allow_pickle=True)

term_df = pd.DataFrame(dense_vectors,columns=names)

def jazz_search(search_string):
    _,indices = nbrs.kneighbors(vectorizer.transform([search_string]))
    
    ret_df = jazz_df.iloc[indices[0]][['url','title']]
    
    return ret_df.to_records().tolist()