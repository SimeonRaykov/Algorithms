// # Loan allocation coding challenge

// One of the requirements of the Funding Circle marketplace is that it fairly allocates loans to investors, 
// within the constraints of certain investor specified criteria.

// In this coding challenge you are required to write some code that takes as input a set of loans and a set of investors, 
// and returns as output a structure indicating which loans have been allocated to each investor. Each loan can only be 
// allocated to a single investor, and investors will only fund loans that meet their specified criteria. 

// ## Loans

// Loans are modelled such that they have the following attributes:

// * *id* - The unique ID of the loan
// * *category* - The category of the loan (Property, Retail, Medical)
// * *risk_band* - The risk band associated with the loan (A+, A, B, C, D, E)
// * *amount* - The amount of the loan in £

// So an example loan would look something like:

// ```
// {
//   "id": 1234567,
//   "category": "property",
//   "risk_band": "A",
//   "amount": 1000
// }
// ```

// ## Investors
// As mentioned above, your code should fairly allocate loans according to certain investor specified criteria. Investors
// should also not be able to fund more loans than they have money to invest.

// Plan your system to meet the requirements of the first three investors, *Bob*, *Susan*, and *George*. Once you are able 
// to reach a working solution for Part I, think about how to extend your system to cover *Helen* and *Jamie*'s use cases. 

// **Part I**
// * *Bob* - only wants to invest in property loans.
// * *Susan* - will invest in either property or retail loans.
// * *George* - only wants to invest in "A" grade loans.

// **Part II** 

// - *Helen* - wants to invest in a maximum of 40% property loans.
// - *Jamie* - wants to invest only in high grade (>= B) property loans.

// ## Notes
// * All state should be handled in memory
// * Make sure to talk about your thought process as you complete the challenge 

function loanAllocator(loans, investors) {

    let allocatedLoans = {
        "Bob": [],
        "Susan": [],
        "George": [],
        "Helen": [],
        "Jamie": []
    };

    const copyInvestors = [...investors];

    for (let i = 0; i < loans.length; i += 1) {
        const {
            id,
            category,
            risk_band,
        } = loans[i];

        let currentAllowedInvestors = [];
        if ((category === 'property' && copyInvestors[i] === 'Bob')) {
            currentAllowedInvestors.push('Bob');
        }

        if ((category === 'property' || category === 'retail') && copyInvestors[i] === 'Susan') {
            currentAllowedInvestors.push('Susan');
        }

        if (risk_band === 'A' && copyInvestors[i] === 'George') {
            currentAllowedInvestors.push('George');
        }

        if (copyInvestors[i] === 'Helen') {
            if (category !== 'property') {
                currentAllowedInvestors.push('Helen');
            } else {
                const helenLoanIds = allocatedLoans['Helen'];
                const helenPropertyLoanIds = loans.filter(loan => loan.category === 'property' && helenLoanIds.includes(loan.id)).map(loan => loan.id);
                const shouldHelenGetLoan = helenLoanIds.length * 0.4 > helenPropertyLoanIds.length;
                if (shouldHelenGetLoan) currentAllowedInvestors.push('Helen');
            }
        }

        if ((risk_band === 'A' || risk_band === 'B' || risk_band === 'A+') && copyInvestors[i] === 'Jamie') {
            currentAllowedInvestors.push('Jamie');
        }

        const filteredVals = currentAllowedInvestors.map((allowedInvestor) => {
            return allocatedLoans[allowedInvestor].length
        });

        const min = Math.min([...filteredVals]);

        for (const investor of currentAllowedInvestors) {
            if (allocatedLoans[investor].length === min) {
                allocatedLoans[investor] = [...allocatedLoans[investor], id]
                break;
            }
        }
    }
    return allocatedLoans;
}

const mockLoans = [{
        "id": 1,
        "category": "medical",
        "risk_band": "E",
        "amount": 1000
    },
    {
        "id": 2,
        "category": "retail",
        "risk_band": "A",
        "amount": 1000
    },
    {
        "id": 23,
        "category": "retail",
        "risk_band": "A",
        "amount": 1000
    },
    {
        "id": 3111,
        "category": "retail",
        "risk_band": "A",
        "amount": 1000
    }
]

const mockLoans2 = [{
        "id": 1,
        "category": "property",
        "risk_band": "E",
        "amount": 1000
    },
    {
        "id": 2,
        "category": "retail",
        "risk_band": "A",
        "amount": 1000
    },
    {
        "id": 3,
        "category": "retail",
        "risk_band": "A",
        "amount": 1000
    },
    {
        "id": 4,
        "category": "property",
        "risk_band": "A",
        "amount": 1000
    },
]

loanAllocator(mockLoans2, ['Helen', 'Helen', 'Helen', 'Helen']);