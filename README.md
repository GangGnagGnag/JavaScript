# JSP
JSP 학습


- let: 지역변수
- const: 상수
- var: 함수 레벨 스코프

- 변수 호이스팅: 선언전에 초기화나 함수 호출이 가능하다, 이는 변수선언이 런 타입이 아니라 그 이전 단계에서 먼저 실행되기 때문이다

- ajax : 웹에서 동적으로 데이터를 주고 받는 기술 (Asynchronus javascript and XML)

- XHR 오브젝트(XMLHttpRequest)-브라우저에서 제공하는 API-> fetchO API
    ==> JSON(javascript object Notation) data format{ key: value }
    stringify: object -> josn(serialize)
    parse: josn -> object(deserialize)

- abc---> abc(cba)

- async
    1. callback
    2. promise - 콜백함수 대신 사용하는 비동기 오브젝트
    3. async await
        Producer:  콜백함수 대신에 사용하는 비동기 오브젝트, producer와 consumer를 연결해 주는 특별한 js 객체

            promise를 사용해서 비동기 실행 함수를 만들고 실행 결과가 
            **성공되면 resolve(value)**를 호출하여 결과값을 consumer에게 전달한다. 
            **실패하게 되면 reject(error)**를 호출하여 에러를 전달한다 

            대기(pending)
            이행(fulfilled)
            거부(rejected)
            consumer

- then이란 메서드는 실행하고나서 리턴을 하는데 then 을 리턴한다.