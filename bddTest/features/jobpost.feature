Feature: Check job post
    As a agent I want to post a job

    Scenario: As a agent I can post a job
        Given I am in post job page
        And I enter "first test post" as my Job-title
        And I enter "test description" as my Description
        When I click on the "submit" button
        Then I should be on the same page
