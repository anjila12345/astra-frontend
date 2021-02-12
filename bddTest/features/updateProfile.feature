Feature: Check user update
    As a user I want to update my details

    Scenario: As a user I can update my details
        Given I am at login page
        And I input "test@test.com" as my email and I input "test" as my password
        When I click the "sign in" button
        And I go to the profile
        And I input "testUpdated" as my updated name
        And I click on the "update" button
        Then My profile name should be updated to "testUpdated"