<!--
백엔드용 README 템플릿
-->

# 프로젝트명 + 용도 
키뮤스튜디오 백엔드 서버


## 언어
 - Typescript 4.1.3
 - ts-node 9.1.1
 - nodejs 12.18.3
 - npm 7.3.0

## 구성
express.js 기반으로 작성됨

<!-- 이 저장소의 코드의 전체적인 구성을 적어주세요 -->
<!--
ex1)
Django와 django-rest-framework 기반으로 작성됨
`./bank` 디렉토리에 설정 및 `wsgi.py` 파일이 있음
테스트 케이스는 각 app의 `test.py` 파일에 있음
기동을 위해 uwsgi와 nginx를 필요로 함
-->
<!--
ex2)
nest.js 기반으로 작성됨
기동을 위해 pm2와 nginx를 필요로 함
-->
(작성 필요)

## Database and cache
MySQL 8.0 이상
현재는 로컬에서 작업 중, 추후 AWS RDS 인스턴스에 연결 예정 (업데이트 예정)
<!-- 이 저장소의 코드를 기동하기 위해 필요한 DB와 cache 서비스를 적어주세요 -->
<!--
ex) PostgresSQL 11 이상
ex) RDS에서 PostgresSQL 10 호환
ex) 로컬 서버에 memcached를 구축해야 함
ex) AWS elasticache
-->

## 환경
현재는 로컬에서 작업 중, 추후 EC2 인스턴스에서 pm2 + nginx를 사용해 배포할 것 (업데이트 예정)
<!-- 이 저장소의 코드를 기동하기 위해 필요한 환경을 적어주세요. -->
<!--
ex1)
Ubuntu 18.04 기반의 로컬 서버
nginx 세팅
-->
<!--
ex2)
Ubuntu 18.04 기반의 로컬 서버
Docker 세팅
docker-compose 세팅
만들어진 Docker image를 보관할 hub 필요
-->
<!--
ex3)
AWS EC2
AWS S3
AWS IAM
AWS CloudFront
-->

## 로컬 개발 방법
nodejs
1. `npm install`
2. `.env` 파일을 로컬 환경에 맞게 수정해주세요.
3. `npm start`를 하면 개발 서버가 기동됩니다
<!-- 개발자가 해당 소스를 로컬에서 테스트하기 위해 필요한 절차를 적어주세요 -->
<!--
ex1) Python
1. virtualenv를 하나 만듭니다
2. `pip install -r requirements.txt`
3. `bank/settings.py` 파일을 로컬 환경에 맞게 수정해주세요.
4. `python manage.py migrate`를 통해 DB를 생성합니다
5. `python manage.py runserver`를 하면 개발 서버가 기동됩니다
-->
<!--
ex2) nodejs
1. `yarn install`
2. `config.js` 파일을 로컬 환경에 맞게 수정해주세요.
3. 설정한 DBMS에 `schema.sql` 파일을 실행해주세요.
4. `yarn start`를 하면 개발 서버가 기동됩니다
-->

## 배포 방법
현재 로컬에서 작업 중, 추후 Github Action을 통해 main 브랜치에 푸시만 하면 자동으로 EC2 인스턴스 내부에서 다음의 커맨드를 실행하여 배포를 자동화:
1. git pull origin main
2. pm2 restart {service name}
<!-- 개발자가 이 소스를 실서비스에 적용하기 위해 필요한 절차를 적어주세요 -->
<!--
ex1)
1. `ssh ubuntu@aa.bbb.c.ddd` 로 서버에 접속합니다. (비밀번호: xxx)
2. `cd coinbank`
3. `git pull`
4. `sudo systemctl restart nginx`
-->
<!--
ex2)
1. 로컬에서 `docker build --tag xxx/yyy:latest` 해주세요
2. 로컬에서 `docker push xxx/yyy:latest` 해주세요 (비밀번호: xxx)
3. `ssh ubuntu@aa.bbb.c.ddd` 로 서버에 접속합니다. (비밀번호: xxx)
4. `cd coinbank`
3. `docker pull xxx/yyy:latest`
4. `docker-compose up -d`
-->
<!--
ex3)
1. 로컬에서 `docker build --tag xxx/yyy:latest` 해주세요
2. 로컬에서 `docker push xxx/yyy:latest` 해주세요 (비밀번호: xxx)
3. AWS 콘솔에서 ECS로 들어갑니다
4. 새 revisions을 생성합니다
5. 만들어진 revision을 현재 서비스에 반영합니다. (문제 발생시 force deploy에 체크)
-->

## 배포 관련 계정 정보
현재 로컬에서 작업 중, 추후 업데이트 예정
<!-- 배포에 관련해서 필요한 계정 정보를 적어주세요 -->
<!--
ex1)
cafe24
ID: coinbank11
PW: xxxxx
-->
<!--
ex2)
AWS
ID: coinbank11
PW: xxxxx
-->

## 실서비스 확인용 계정 정보
현재 로컬에서 작업 중, 추후 업데이트 예정
<!-- 본 코드가 배포된 실서비스에서 장애가 있을 시 상황을 확인하기 위해서, 실서비스에 남아있는 테스트용 계정 정보를 적어주세요 -->
<!--
ex)
관리자계정
ID: admindev
PW: xxxxxxxx
-->

## 기타 관련 계정 정보
<!-- 기타, 본 서비스 관련해서 필요한 계정 정보를 적어주세요 -->
<!--
ex)
Sentry
ID: coinbank11
PW: xxxxx
-->
특이사항 없음

## 도메인

1. 스토어
   -  모든 카테고리를 불러온다.
   -  각 카테고리를 선택했을 때 서브카테고리들을 불러온다.
   -  각 서브카테고리에 해당하는 상품 리스트를 불러온다. 이때, 상품들을 다음의 기준으로 필터링할 수 있게 만든다:
      - 토픽
      -  인기순 (디폴트)
      -  높은가격순
      -  낮은가격순
      -  최신순
   -  각 상품들은 다음의 정보를 포함한다:
      -  썸네일
      -  상품이름
      -  판매가격
      -  (할인 적용된 경우) 할인가격

2. 상품 상세
   - 상품의 기본 정보를 불러온다:
      -  썸네일
      -  상품이름
      -  판매가격
      -  (할인 적용된 경우) 할인가격
      -  배송비
      -  묶음배송 정보. 버튼을 클릭하면 팝업창이 뜨고 동일한 묶음상품군의 제품이 뜬다. 
   - 상품을 클릭하면 상품의 옵션 그룹과 각 그룹에 해당하는 옵션들을 불러온다.
   - 해당 상품을 구매한 유저들이 작성한 리뷰들을 불러온다. 각 리뷰는 다음의 정보를 포함한다:
      - 리뷰 타이틀
      - 리뷰 이미지 (필수 아님)
      - 별점
      - 아이디
      - 업로드 날짜
      - 리뷰 텍스트
   - 다른 상품들의 정보를 불러온다:
      - 이번주 BEST 상품
      - 최근 본 상품 (2차 개발범위)
   - 구매하기 (아래 '결제' 도메인에서 구현)
   - 장바구니 (2차 개발범위)


3. 마이페이지
   - 홈: 로그인된 유저의 정보를 불러온다.
      - 아이디
      - 쿠폰수
      - 마일리지
   - 쿠폰관리: 로그인된 유저가 보유한 (유효한) 쿠폰 정보를 불러온다.
      - 쿠폰 번호를 입력하면 쿠폰을 발급해주는 API
      - 각 쿠폰은 다음의 정보를 포함한다:
         - 이름
         - 최소 주문 금액
         - 할인 금액
         - 발급일
         - 만료일
   - 마일리지 관리: 로그인된 유저의 마일리지 정보를 불러온다. 다음의 정보를 포함한다:
      - 보유한 마일리지 잔액
      - 적립 / 사용내역
   - 리뷰 관리: 로그인된 유저가 작성한 리뷰들과 리뷰를 작성할 수 있는 상품들을 불러온다.
      - 작성 가능한 리뷰: 구매를 진행했지만 리뷰를 쓰지 않은 상품들을 불러온다. 이때 포함되는 정보는 다음과 같다:
        - 상품 이름 + 상품 옵션
        - 구매일자
      - 내 리뷰: 현재까지 작성한 리뷰들을 불러온다. 각 항목은 다음의 정보를 포함한다:
         - 상품이름 + 상품 옵션
         - 구매일자
         - 리뷰 사진
         - 별점
         - 리뷰 내용
         - 리뷰 작성일
         - 아이디
      - 리뷰 작성: 구매했지만 리뷰를 작성하지 않은 상품에 대해 리뷰를 작성한다. 리뷰작성 시 500 마일리지가 적립된다. 리뷰 작성에 필요한 정보는 다음과 같다:
         - 별점
         - 리뷰 내용
         - 리뷰 사진 (최대 3개)
   - 주문배송조회: 주문한 상품들의 목록을 불러온다. 상품 정보를 클릭 시 해당 주문에 대한 상세 페이지로 이동한다. 
      - 목록의 각 상품은 다음의 정보를 포함한다:
        - 주문일
        - 썸네일
        - 주문번호
        - 주문내용({상품이름} 외 n건)
        - 결제금액
      - 상품 중 하나를 클릭했을 시 나오는 정보는 다음과 같다:
        - 주문일
        - 주문번호
        - 결제상태
        - 주문상태
        - 배송정보(받는 사람의 이름, 전화번호, 주소)
        - 결제정보(상품금액합계, 쿠폰할인금액, 마일리지 사용금액, 배송비, 총 결제금액)
   - 회원 정보 수정
     - 회원 정보 확인: 아이디와 비밀번호로 회원 정보를 먼저 확인한다.
     - 변경 가능한 정보: 비밀번호(이메일 가입 시), 생년월일, 사회이슈


4. 결제
   - 필요한 입력 정보:
     - 수령인
     - 전화번호
     - 배송 요청사항 
     - 주문 상품 
     - 적용된 쿠폰
     - 사용하고자 하는 마일리지 액수
     - 결제수단
     - 입금은행
     - 입금자명
     - 상품금액 
     - 배송비 
     - 총 결제금액
   - 결제 완료 시 결제된 상품의 정보와 배송정보를 출력한다. 다음의 정보가 포함된다:
      - 주문번호
      - 첫 번째 상품의 썸네일
      - 첫 번째 상품의 이름
      - 주문한 상품의 개수
      - 총 결제금액
      - 받는 사람의 이름
      - 전화번호
      - 주소

5. 검색
   - 상품 이름을 기준으로 검색한다. 각 항목은 다음의 정보를 포함한다:
     - 썸네일
     - 상품이름
     - 판매가격
     - 할인가격

## 체크리스트
<!-- 아래 항목 중 확인이 완료된 부분은 `[x]`로 수정해주세요. -->

- [ ] GPL, AGPL등의 전염성 라이선스로 인해 소스코드를 공개해야하는지 확인이 끝났습니다.
- [ ] `.editorconfig` 등의 협업 관련 설정을 정리해두었습니다.
- [ ] 추후 다른 개발자가 코드를 보게 되더라도 곤란하지 않게 적절한 주석과 문서화를 해두었습니다.
- [x] 저장소의 코드를 띄우기 위해 필요한 DB Schema 내지는 Migration이 포함되어있습니다.
- [x] 저장소의 코드를 띄우기 위해 필요한 최소한의 더미데이터가 포함되어 있습니다.
- [ ] 저장소의 코드를 배포하기 위한 키 파일 등의 보안 자료가 안전하게 공유되었습니다.
