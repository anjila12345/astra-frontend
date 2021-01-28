Feature: Check register
    As a user I want get registered to the system

    Scenario: As a user I can register
        Given I am in registration page
        And I enter "user12" as my firstname
        And I enter "user12" as my lastname
        And I enter "user12@gmail.com" as my email
        And I enter "user12" as my username
        And I enter "password" as my password
        When I click on the "sign up" button
        Then I should be on the login page
