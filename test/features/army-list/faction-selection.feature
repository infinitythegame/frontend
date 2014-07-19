# Selecting
Feature: Faction Selection
  In order to choose units in my army
  As a user
  I would like to see a list of units for my faction

  Scenario: Haqqislam army list
    Given I am have not yet selected a faction
    When I select 'Haqqislam'
    Then I should see a list of Haqqislam units
