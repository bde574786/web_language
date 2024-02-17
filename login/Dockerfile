# 베이스 이미지 설정
FROM python:3.11.5

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사
COPY requirements.txt .

# 의존성 설치
RUN pip install -r requirements.txt

# 애플리케이션 파일 복사
COPY . .

# 컨테이너 실행 시 실행될 명령어
CMD ["python", "./app.py"]
