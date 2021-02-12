Feature: Checkout product
    As a user I want checkout product added in cart

    Scenario: As a user I can checkout product added in cart
        Given I am on login page to checkout
        And I input "test@test.com" as my normal user email and I input "test" as my password for checkout
        When I click on the "Sign In" button
        And I add product to cart
        And I click on "checkout"
        And I enter "test address" as address, "test city" as city, "44600" as postal code and "Nepal" as country
        And I enter click on the "continue" button
        And I click on "Cash on Delivery" method and click "continue" button
        And I click "Place order" button
        Then there should be a order placed