Feature: Manage order
    As a admin I want manage order

    Scenario: As a admin I can to manage order
        Given A user has already placed order
        Given I am on login page to manage order
        And I input "admin@admin.com" as admin email and I input "admin" as my password to manage order
        When I click on the "Signin" button
        And I go to the order section
        And I click on the "Details" button
        And I click to the "Mark as Paid" button to make the order paid
        And I click to the "Mark As Delivered" button to make the order delivered
        Then there should be date on the "Paid" and "Delivered" of order
