Feature: View User
    As a admin I want view all user

    Scenario: As a admin I can view all user
        Given I am on login page to view all user
        And I input "admin@admin.com" as admin email and I input "admin" as my password to view all user
        When I click the "signIn" button
        And I go to the user section to view all user
        Then the user should be list of users
