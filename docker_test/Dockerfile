# Python 3.9 이미지 생성
FROM python:3.9

# Python 패키지 목록 복사
COPY requirements.txt requirements.txt

# 명시된 패키지 모두 설치
RUN pip install -r requirements.txt

# Flask크 코드를 컨테이너 내부로 복사
COPY . /app

# 루트 디렉터리 설정
WORKDIR /app

# 컨테이너가 시작될 때 기본 명령어 지정
CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0"]