from fastapi import FastAPI

app = FastAPI(title = "AI Repo Docs API")


@app.get("/")
def root():
    return {"message": "AI Repo Docs API is running"}

@app.get("/health")
def health_check():
    return {"status": "ok"}