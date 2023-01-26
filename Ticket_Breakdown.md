# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Task 1: New custom Agent ID field to Agent database

**Acceptance Criteria**: 
A new field for custom Agent ID is added to the Agent database and can be filled in by Facilities when creating or editing an Agent.

**Time/Effort Estimate**: 2 hours

**Implementation Details**: 
- Modify the database schema to add the custom Agent ID field
- Introduce new form field to existing Facilitate forms or interfaces 

### Task 2: Implement custom Agent ID in report generation

**Acceptance Criteria**: 
Reports generated for Facilities now use the custom Agent ID, if it is present, instead of the internal database ID.

**Time/Effort Estimate**: 2 hours

**Implementation Details**: 
- Accommodate changes for custom Agent ID in report generating code.


### Task 3: Provide a way for facilities to view and edit their own Agent IDs

**Acceptance Criteria**: 

Facilities can view and edit their own Agent IDs for the agents that they have access to.

**Time/Effort Estimate**: 3 hours

**Implementation Details**: 
- Accommodate changes for custom Agent ID  for facilities to view and edit their Agent IDs.

### Task 4: Test and QA the new feature

**Acceptance Criteria**: 
The new feature has been thoroughly tested and any bugs or issues have been identified and resolved.

**Time/Effort Estimate**: 4 hours

**Implementation Details**: 

- Perform tests to ensure the new feature is working as expected, including testing the database, forms, interfaces, and reports.

### Task 5: Deploy the new feature to production

**Acceptance Criteria**: The new feature is deployed to the production environment and is fully functional.
**Time/Effort Estimate**: 1 hour
**Implementation Details**: This will involve deploying the new code and any necessary database changes to the production environment.