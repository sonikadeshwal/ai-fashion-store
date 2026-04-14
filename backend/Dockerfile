FROM python:3.11-slim

WORKDIR /app

# Install system dependencies if any ML libraries require them (like libgl1 for cv2)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy dependencies
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code and ML models
COPY backend/ ./backend/
COPY ml-models/ ./ml-models/

# Expose FastAPI port
EXPOSE 8000

# Run Uvicorn from the backend directory
WORKDIR /app/backend
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
