## 싱글톤 패턴 Singleton Pattern
2018/02/07(수) - Jinho

-----

# 객체란
### 객체: 속성과 기능을 갖춘 것 (클래스 + 인스턴스)

### 클래스 : 속성과 기능을 정의한 것
```
Class Shop {
  id: integer
  main_domain: string
  url: string
  date_created: Date
}
```

### 인스턴스 : 속성과 기능을 가진 것 중 실제하는 것
```
Shop {
  id: 1
  main_domain: 'example'
  url: 'http://example.com'
  date_created: new Date(2018, 1, 7)
}
```

---

# 싱글톤 패턴
- Singleton : 외동이, 한 개의 것, 한 장의 패
- 싱글톤 패턴 : 하나만 생성해야 할 객체를 위한 패턴
	- 클래스를 생성하는 인스턴스가 오직 하나여야 함
	- 인스턴스 접근 / 생성 역시 한가지의 방식으로 제공
- 활용
	- 클래스 인스턴스가 오직 하나여야 함을 보장하는 곳
	- 모든 클라이언트가 하나의 인스턴스만 사용해야 하는 경우
