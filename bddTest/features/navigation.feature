Feature: Check navigation bar
    As a agent I want to navigate through pages

    Scenario: As a agent I can navigate through pages
        Given I am in different page
        When I click on the "profile" button
        Then I should be on the profile page
