# Submission for Koodoo Software Engineer Technical Assessment 👾

---

## Introduction 🎬

I was asked to complete a small technical challenge based on node.js.


### Things I consider in my solution 🤔

- Does it solve the basic case?: YES
- What other cases might need to be considered?:
    1) if more than three months of data has been supplied
    2) if 'monthNumber' is called something else
    3) if the data is provided in the reverse chronological order
    4) If the amount provided contains a comma instead of a period (my function doesn't address this case yet)
- What unit tests have I written for this type of function?
    - unit tests have been split into two groups. The first looks at if the data argument used was not in the correct format (e.g. data was corrupted) in which case the function returns false. The second group of unit tests addresses the case when valid data has been provided.

### Improvements

1) Make sure that the amounts can be provided with a period or a comma.

2) Make sure it can handle a case where the ammounts are provided with currency units (e.g. $, GBP, NOK, etc...)

3) Make sure it can handle a case where the month dictionaries are provided unordered.
