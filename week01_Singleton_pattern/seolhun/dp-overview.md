# GoF Design Pattern이란?(Gang of Four)

## Overview
- 1994년 Erich Gamma, Richard Helm, Ralph Johnson 및 John Vlissides의 4명의 저자가 Software Design에서 Design Pattern에 대한 개념을 정리한 `Design Patterns - Elements of Reusable Object-Oriented Software`라는 책을 출간했습니다.

- 이 저자들은 집합 적으로 Gang of Four (GOF)로 알려져 있습니다. 이 저자들에 따르면 디자인 패턴은 기본적으로 다음과 같은 **객체 지향 디자인 원칙**을 기반으로합니다.
	1. 구현이 아닌 인터페이스에 프로그램하십시오.(Program to an interface not an implementation)
	2. 상속에 대한 객체 합성 우선권 부여(Favor object composition over inheritance)

#### 디자인 패턴의 사용법
- 개발자를위한 공통 플랫폼
	- 디자인 패턴은 표준 용어를 제공하며 특정 시나리오에만 적용됩니다. 예를 들어, 단일 디자인 패턴은 단일 객체의 사용을 의미하므로 단일 디자인 패턴에 익숙한 모든 개발자는 단일 객체를 사용하고 프로그램이 단일 패턴을 따르고 있음을 서로 말할 수 있습니다.
- 모범 사례
	- 디자인 패턴은 오랜 기간 동안 발전되어 왔으며 소프트웨어 개발 중 직면 한 특정 문제에 대한 최상의 솔루션을 제공합니다. 이러한 패턴을 학습하면 미숙 한 개발자가 쉽고 빠르게 소프트웨어 디자인을 배울 수 있습니다.

## 디자인 패턴의 종류
|Creational Patterns|Structural Patterns|Behavioral Patterns|
|--|--|--|
|Creational Patterns은 새 연산자를 사용하여 객체를 직접 인스턴스화하는 대신 생성 논리를 숨기면서 객체를 만드는 방법을 제공합니다. 이렇게하면 주어진 유스 케이스에 대해 생성해야하는 객체를 결정할 때 프로그램에 더 많은 유연성이 제공됩니다.|Structural Patterns은 클래스와 객체 구성에 관련됩니다. 상속 개념은 인터페이스를 작성하고 새로운 기능을 얻기 위해 오브젝트를 작성하는 방법을 정의하는 데 사용됩니다.|Behavioral Patterns은 특히 객체 간의 통신(행위)와 관련됩니다.|

#### Structural Patterns
1. Singleton Pattern
싱글톤 패턴은 가장 단순한 디자인 패턴 중 하나입니다. 이 유형의 디자인 패턴은 오브젝트를 생성하는 가장 좋은 방법 중 하나를 제공하므로이 패턴은 Creational Patterns에 속해 있습니다. 
**이 패턴은 단일 객체 만 생성되도록하면서 객체를 만드는 단일 클래스를 포함합니다. 이 클래스는 클래스 객체를 인스턴스화하지 않고 직접 액세스 할 수있는 유일한 객체에 액세스하는 방법을 제공합니다.**