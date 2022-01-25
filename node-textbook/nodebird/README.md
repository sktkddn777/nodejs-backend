## 주요 기능
로그인
이미지 업로드 
게시글 작성
해시태그 검색
팔로잉

## DB
MySQL
DB에 사용자, 게시글, 이미지, 팔로잉-팔로워 관계, 해시테그 저장
테이블 간에 관계가 있기 때문에 MySQL 사용하였다.


## 구현
- 삭제 기능 구현
- main.html에서 axios.post로 게시글 id data를 post.js에 /post/:id/delete에 json형태로 보내줬다.
- 이후 게시글 id 데이터를 orm을 통해 삭제.