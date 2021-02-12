Feature: Delete product 
    As a admin I want to update a product details

    Scenario: As a admin I can update a product details
        Given I am on login page to delete a product
        And I enter "admin@admin.com" as my admin email and "admin" as my password
        When I press on "sign in" button
        And I go to the products section
        And I click on the delete icon
        And I click on the "OK" button on the alert tab
        Then the product name should be deleted