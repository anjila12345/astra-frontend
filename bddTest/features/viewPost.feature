Feature: View product
    As a admin I want to view product details
    As a user I want to view product

    Scenario: As a admin I can view product details
        Given I am on login page to view product details
        And I input "admin@admin.com" as my admin's email and I input "admin" as my password
        When I click on "Sign in" button
        And I go to the product section for admin
        Then there should be product details list

    Scenario: As a user I can view product
        Given I am on Home page
        Then There should be a list of products