Feature: Test Case Scenarios

@login
Scenario: User success login
    Given user navigates to the login page
    When user enters valid credentials
    Then user should be logged in successfully

@validateuser
Scenario: Validate user berada di dashboard setelah login
    Given user is logged in
    When user navigates to the dashboard
    Then user should be on the dashboard page

@item
Scenario: Add item to cart
    Given user is on the dashboard page
    When user adds an item to the cart
    Then the item should be added successfully

@validateitem
Scenario: Validate item sukses ditambahkan ke cart
    Given user has added an item to the cart
    When user navigates to the cart
    Then the cart should contain the added item

@testcasefailed
Scenario Outline: User failed login
    Given user navigates to the login page
    When user enters invalid credentials "<username>" and "<password>"
    Then user should not be logged in

    Examples:
      | username      | password      |
      | invalid_user  | invalid_pass |