Feature: Check product update
    As a admin I want to update a product details

    Scenario: As a admin I can update a product details
        Given I am on login page
        And I input "admin@admin.com" as my admin email and I input "admin" as my password
        When I click on "sign in" button
        And I go to the product section
        And I click on the edit icon
        And I input "Updated sample name" as product name
        And I click on the "update" button in product page
        Then the product name should be updated to "Updated sample name"