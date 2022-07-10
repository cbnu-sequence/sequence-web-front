describe('홈 화면', () => {
  it('최상단', () => {
    cy.visit('http://localhost:3000/');
    cy.get('img[src="/sqLogo.png"]').should("exist");
    cy.get('img[src="/sqMakesD.png"]').should("exist");
    cy.get('.main__top').should("have.text", "쇼트가 신을 이루고 신이 시퀀스를 이룬다.안녕하세요. 성장지향형 프로젝트 동아리 '시퀀스' 입니다.저희는 세상에 존재하는 문제들을 기술적으로 해결합니다.");
  });

  it('두번째 프로젝트 영역', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.project__year').should("exist");
    cy.get('.project__title').should("exist");
    cy.get('.project__content').should("exist");
  });

  it('세번째 뽀모도로 영역', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.pomodoro--text').contains('Pomodoro').should("have.css","color","rgb(250, 0, 32)");
    cy.get('.pomodoro--text').contains('Why Pomodoro?').should("have.css","color","rgb(14, 102, 14)");
    cy.get('.pomodoro--text').should("have.text","PomodoroWhy Pomodoro?뽀모도로 기법은 시간 관리 방법론으로, 타이머를 이용해서 25분간 집중해서 일을 한 다음 5분간 휴식하는 방식입니다. 시퀀스에서는 개발자로서 '집중과 효율의 극대화'를 위해 뽀모도로를 선택했습니다.")
    cy.get('img[src="/tomato.png"]').click();
    cy.url().should('include', '/pomodoro');
  });

  it('최하단 깃허브 영역', () => {
    cy.visit('http://localhost:3000/');
    cy.get('img[src="/github.png"]').should("exist");
  });
})