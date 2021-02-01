Feature: Check agentregister
    As a agent I want get registered to the system

    Scenario: As a agent I can register
        Given I am in agent registration page
        And I enter "agent1" as my firstname
        And I enter "agent1" as my lastname
        And I enter "agent1@gmail.com" as my email
        And I enter "agent1" as my username
        And I enter "password123" as my password
        When I press the "sign up" button
        Then I should be on the agent login page
