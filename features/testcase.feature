Feature: Test Case Scenarios

Scenario: User success login
    Given user navigates to the login page
    When user enters valid credentials
    Then user should be logged in successfully

Scenario: Validate user berada di dashboard setelah login
    Given user is logged in
    When user navigates to the dashboard
    Then user should be on the dashboard page

Scenario: Add item to cart
    Given user is on the dashboard page
    When user adds an item to the cart
    Then the item should be added successfully

Scenario: Validate item sukses ditambahkan ke cart
    Given user has added an item to the cart
    When user navigates to the cart
    Then the cart should contain the added item
