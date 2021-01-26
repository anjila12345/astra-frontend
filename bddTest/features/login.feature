Feature: Check login
    As a user I want to login to the system

    Scenario: As a user I can login
        Given I am in login page
        And I enter "test@test.com" as my email
        And I enter "test" as my password
        When I click on the "sign in" button
        Then I should be on the login success page
