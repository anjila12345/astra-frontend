Feature: Add to cart
    As a user I want add product to cart

    Scenario: As a user I can add product to cart
        Given I am on login page to add product to cart
        And I input "test@test.com" as my normal user email and I input "test" as my password
        When I click on "Sign In" button
        And I click on a product
        And I enter "5" as quantity
        And I click "Add to cart"
        Then there should be a product in the cart