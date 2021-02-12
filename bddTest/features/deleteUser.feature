Feature: Delete User
    As a admin I want delete a user

    Scenario: As a admin I can delete a user
        Given A normal user has already registered
        Given I am on login page to delete a user
        And I input "admin@admin.com" as admin email and I input "admin" as my password to delete a user
        When I click the "signin" button
        And I go to the user section to delete a user
        And I click on the delete icon button
        And I click on "OK" button on the alert tab
        Then the user should be deleted
