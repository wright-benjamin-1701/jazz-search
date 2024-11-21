import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import NearestNeighbors
import numpy as np

jazz_df = pd.read_csv('jazz.csv')

vectorizer = TfidfVectorizer(max_features=2000,stop_words='english',min_df =.05,max_df=.95)
vectors = vectorizer.fit_transform(jazz_df['text']) 
dense_vectors = vectors.todense().tolist()

nbrs = NearestNeighbors(n_neighbors=10,algorithm='brute')
nbrs.fit(dense_vectors)

term_df = pd.DataFrame(dense_vectors,columns=vectorizer.get_feature_names_out())

def jazz_search(search_string):
    _,indices = nbrs.kneighbors(vectorizer.transform([search_string]))
    
    ret_df = jazz_df.iloc[indices[0]][['url','title']]
    
    return ret_df.to_records().tolist()