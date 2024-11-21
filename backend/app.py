import os
from fastapi import FastAPI, Query
from fastapi.responses import HTMLResponse

from search import jazz_search

from fastapi.middleware.cors import CORSMiddleware

origins = [

    "http://localhost",
    "http://localhost:3000",
]



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", response_class=HTMLResponse)
async def read_root():
    return """Hello World!"""


@app.get("/search")
async def search(query: str):
    # Implement your search logic here
    return jazz_search(query)
