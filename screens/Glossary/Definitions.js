import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Definitions = (props) =>{

  const [letter, setLetter] = useState('A')
  
  useEffect(() => {
    setLetter(props.letter)
  }, [props.letter]);
  
  return (
    <View style={{paddingHorizontal:20}}>
      {letter == 'A' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Abstract of title</Text>
        <Text style={styles.define}>A written history of all the transactions related to the title for a specific tract of land. An abstract of title covers the period from the original source of title (often the original land grant from the United States government to an individual) to the present time and summarizes all subsequent documents that have been recorded against that tract.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Acceptance</Text>
        <Text style={styles.define}>A buyer’s or seller’s agreement to enter into a contract and be bound by the terms of the offer.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Account Termination Fee</Text>
        <Text style={styles.define}>A fee that may be charged if you pay in full and terminate your home equity line of credit during the first 5 years. Paying down to a zero balance does not count as termination. See also: prepayment penalty.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Additional principal payment</Text>
        <Text style={styles.define}>A payment made by a borrower of more than the scheduled principal amount due in order to reduce the outstanding balance on the loan, to save on interest over the life of the loan and/or pay off the loan early.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Adjustable-rate mortgage (ARM)</Text>
        <Text style={styles.define}>A mortgage in which your interest rate and monthly payments may change periodically during the life of the loan, based on the fluctuation of an index. Lenders may charge a lower interest rate for the initial period of the loan. Most ARMs have a rate cap that limits the amount the interest rate can change, both in an adjustment period and over the life of the loan. Also called a variable-rate mortgage.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Adjustment cap</Text>
        <Text style={styles.define}>A limit to how much a variable interest rate can increase or decrease in a single adjustment period.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Adjustment period</Text>
        <Text style={styles.define}>The period of time between adjustment dates for an adjustable-rate mortgage (ARM).</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Affordability analysis</Text>
        <Text style={styles.define}>A preliminary analysis of a borrower’s ability to afford the purchase of a home that takes into consideration factors such as income, liabilities and available funds, as well as the type of home loan, the likely taxes and insurance for the home and the estimated closing costs. See also: Prequalification</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Amoritization Table or Schedule</Text>
        <Text style={styles.define}>A timetable or schedule that gives you a breakdown of your monthly payments into principal and interest. You can use this schedule to figure out the amount of principal you’ll be repaying during your mortgage term.</Text>
        </View>
      </View>
      }
      {letter == 'B' &&
      <View style={styles.container}>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Balance Sheet</Text>
      <Text style={styles.define}>A dated financial statement (in table form) that shows your assets, liabilities and net worth.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Balloon loan</Text>
      <Text style={styles.define}>A loan that provides you with lower-than-usual monthly payments for a set period of time followed by a payment larger than usual at the end of your loan repayment period. While a balloon loan may lower your monthly payments it can also mean you make higher interest payments over the life of the loan.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Base rate</Text>
      <Text style={styles.define}>An interest rate that is used as a benchmark, or index, for pricing variable-rate loans such as adjustable-rate mortgages, auto loans and credit cards.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Basis point</Text>
      <Text style={styles.define}>An amount equal to 1/100th of a percentage point. For example, a fee calculated as 50 basis points of $200,000 would be 0.50% or $1,000.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Break even point</Text>
      <Text style={styles.define}>The point at which total income equals total expenses. Also used in connection with decisions related to purchasing discount points on a mortgage. Calculating the break even point will identify how many months it will take to recoup the costs associated with paying for the discount point amount under consideration. In other words, if $3,600 is paid toward discount points to reduce the interest rate and the reduced rate would decrease the monthly mortgage payment by $100, it would take 3 years to break even on the choice to pay the discount point amount.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Bridge loan</Text>
      <Text style={styles.define}>A type of mortgage financing between the termination of one loan and the start of another loan. For example, a bridge loan might be taken out by a borrower and secured by that borrower’s present home so that the closing on a new house can take place before the present home is sold.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Broker</Text>
      <Text style={styles.define}>A third party who arranges funding or negotiates a contract between parties, but does not lend the money.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Buydown</Text>
      <Text style={styles.define}>The lump-sum prepayment of all or a portion of your mortgage interest by a lender or homebuilder in order to lower your monthly mortgage payment, typically for a period of 1-3 years. See also: Term</Text>
      </View>
    </View>
      }
      {letter == 'C' &&
      <View style={styles.container}>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Cap</Text>
      <Text style={styles.define}>A limit on how much a variable interest rate can increase. Many adjustable-rate mortgages have both annual (or semiannual) rate caps and lifetime caps. They limit the amount your payments can increase in an adjustment period and over the life of the loan. See: Interest rate cap.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Cash available for closing</Text>
      <Text style={styles.define}>Borrower funds that are available to cover down payment and closing costs. If lending guidelines require the borrower to have cash reserves at the time the loan closes or that the down payment come from specified sources, the borrower’s cash available for closing does not include cash reserves or money from those specified sources.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Cash to close</Text>
      <Text style={styles.define}>The amount a homebuyer needs in cash at the closing of the loan. This typically, this includes down payment and closing costs.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Cash-out refinance</Text>
      <Text style={styles.define}>A refinance transaction in which the new loan amount exceeds the total of the principal balance of the existing first mortgage and any secondary mortgages or liens, together with closing costs and points for the new loan. This excess is usually given to the borrower in cash and can often be used for debt consolidation, home improvement or any other purpose.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Ceiling rate</Text>
      <Text style={styles.define}>The maximum interest rate that can accrue on a variable rate loan or adjustable-rate mortgage (ARM).</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Certificate of title</Text>
      <Text style={styles.define}>A statement provided by an abstract company, title company or attorney stating who holds title to real estate based on the public record.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Clear title</Text>
      <Text style={styles.define}>Titles that are marketable and are free of liens or disputed legal questions as to ownership of the property.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Close</Text>
      <Text style={styles.define}>The Close step is the date you will sign and execute your new loan documents.Depending on the location of the property or type of transaction, the three business days right of rescission period may apply before your funds are available to you. The three business days right of rescission period states that in certain real estate secured transactions that involve the refinance of a primary residence, the Truth in Lending Act allows applicants 3 business days to cancel the transaction and prohibits lenders from disbursing proceeds until after the rescission period has lapsed.</Text>
      </View>
    </View>
      }
      {letter == 'D' &&
      <View style={styles.container}>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Debt consolidation</Text>
      <Text style={styles.define}>A single loan to pay off multiple debts, usually over a longer term. This is a popular use for a home equity line of credit.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Debt-to-income ratio</Text>
      <Text style={styles.define}>Your total monthly debt payments (for example: loans, credit cards and court-ordered payments) divided by your gross monthly income before taxes and expressed as a percentage. Federal Housing Administration (FHA) guidelines layer in early 2017 recommend that your monthly mortgage payment should be no greater than 31% of your monthly income before taxes and your total monthly debt should be no greater than 43% of your monthly income before taxes.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Deed (warranty or quit-claim)</Text>
      <Text style={styles.define}>A document that legally transfers ownership of real estate from a seller to a buyer and delivered to the buyer at closing. Before making a loan, a lender will usually require a title search or a title report to make sure the borrower legally owns the real estate tthat is being used to secure the loan.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Deed of trust</Text>
      <Text style={styles.define}>The document used in some states instead of a mortgage; title is vested in a trustee to secure repayment of the loan.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Down payment</Text>
      <Text style={styles.define}>The amount of cash you pay toward the purchase of your home to make up the difference between the purchase price and your mortgage loan. Down payments often range between 5% and 20% of the sales price depending on many factors, including your loan, your lender and your credit history. How much of a down payment should you make?</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Due-on-sale provision</Text>
      <Text style={styles.define}>A provision in a mortgage home loan that allows the lender to demand repayment in full if the borrower sells the property that serves as security for the loan.</Text>
      </View>
    </View>
      }
      {letter == 'E' &&
      <View style={styles.container}>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Earnest money</Text>
      <Text style={styles.define}>A deposit made toward a down payment as a sign of good faith. The deposit is typically made when a purchase agreement is signed.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Encumbrance</Text>
      <Text style={styles.define}>Any lien or liability attached to a property that affects or limits the title to that property, for example unpaid taxes, mortgages and leases.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Equal Credit Opportunity Act (ECOA)</Text>
      <Text style={styles.define}>A federal law that requires lenders and other creditors to make credit available without discrimination based on race, color, religion, national origin, age, sex, marital status or receipt of income from public assistance programs. Learn more about the ECOA</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Equity</Text>
      <Text style={styles.define}>The difference between the fair market value (appraised value) of your home and your outstanding mortgage balances and other liens.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Escrow</Text>
      <Text style={styles.define}>Funds deposited with a third party, to be held until a specific date is reached and/or a specific condition is met.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Extra Payment/Payment Overage</Text>
      <Text style={styles.define}>When you pay more than your contractual payment, the additional amount that is paid, can either pay your next month's contractual payment or reduce the unpaid principal balance of your mortgage after satisfying any other amounts that are due (for example, outstanding fees, etc.). This may reduce the interest assessed in the future.</Text>
      </View>
    </View>
      }
      {letter == 'F' &&
      <View style={styles.container}>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Fair Credit Reporting Act (FCRA)</Text>
      <Text style={styles.define}>Law passed by Congress to give borrowers certain rights when dealing with consumer reporting agencies, or credit bureaus. All credit bureaus are required to provide accurate credit histories to authorized businesses for use in evaluating applications for insurance, employment, credit or loans.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Fair market value</Text>
      <Text style={styles.define}>The likely selling price of a home. The fair market value is usually determined by an appraisal.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Federal Housing Administration (FHA)</Text>
      <Text style={styles.define}>An agency of the Department of Housing and Urban Development. The FHA provides mortgage insurance for certain residential mortgages. It also sets standards for underwriting these mortgages and for construction of homes secured by these mortgages.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Fee Simple</Text>
      <Text style={styles.define}>Clear and absolute ownership of a piece of property. The fee simple owner of a property has the right to use the land in any way desired, for example: build on it, sell it or lease it.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Fixed-rate mortgage</Text>
      <Text style={styles.define}>A home loan with a predetermined fixed interest rate for the entire term of the loan.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Forbearance</Text>
      <Text style={styles.define}>A period during which your monthly loan payments are temporarily suspended or reduced. You may qualify for forbearance if you are willing but unable to make loan payments due to certain types of financial hardships. During forbearance, principal payments are postponed but interest continues to accrue.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Foreclosure</Text>
      <Text style={styles.define}>A legal procedure in which property securing a defaulted loan is sold by the lender in order to repay a borrower’s loan. The amount paid by a buyer at the foreclosure may not be enough to fully repay the loan and the borrower may continue to owe the lender the difference.</Text>
      </View>
    </View>
      }
      {letter == 'G' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
        <Text style={styles.word}>Good faith estimate (GFE)</Text>
      <Text style={styles.define}>An itemized, detailed list of certain estimated costs associated with a home loan that the lender is required to provide to the borrower within 3 business days of the application.</Text>
      </View>
      </View>
      }
      {letter == 'H' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
        <Text style={styles.word}>Homeowners insurance</Text>
      <Text style={styles.define}>Insurance to protect your home against damage from fire, hurricanes and other catastrophes. Usually, homeowners insurance also covers you against theft and vandalism, as well as personal liability in case someone is hurt or injured on your property. A lender will likely require you to name it as a payee under the insurance if you need to make a claim. Also called hazard insurance.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Home equity line of credit (HELOC)</Text>
      <Text style={styles.define}>A line of credit secured by the borrower's residence. The typical HELOC term is 30 years: a 10-year draw period followed by a 20-year repayment period. A HELOC is often used for home improvements, debt consolidation or other major expenses. In most cases, you can withdraw funds up to your available credit limit for the first 10 years (your draw period) using convenience checks, debit cards or money transfer via Online Banking.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>HUD</Text>
      <Text style={styles.define}>An acronym for the U.S. Department of Housing and Urban Development. HUD is a government agency responsible for the implementation and administration of housing and urban development programs. Among other things, HUD administers the Federal Housing Administration, enforces RESPA regulations and oversees Fannie Mae and Freddie Mac.</Text>
      </View>
      </View>
      }
      {letter == 'I' &&
      <View style={styles.container}>
         <View style={styles.wordbox}>
        <Text style={styles.word}>Impounding</Text>
      <Text style={styles.define}>The collection and placement of monies by a lender into an account in order to pay the borrower’s property taxes and insurance premiums when they become due.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Index</Text>
      <Text style={styles.define}>When used in a mortgage note or credit agreement, a financial index is the measurement used to decide how much the annual percentage rate will change at the beginning of each adjustment period. Generally, the index plus or minus margin equals the new rate that will be charged, subject to any caps. Lenders use various financial index rates: Secured Overnight Financing Rate[(SOFR) and Treasury-Indexed ARMs (T-Bills)]</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Insured mortgage</Text>
      <Text style={styles.define}>A mortgage that is protected by an insurer in case of default. The insurance protects the lender (not the borrower) if a borrower defaults on the loan.</Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Interest rate cap</Text>
      <Text style={styles.define}>A limit on how much the variable interest rate can increase at any one time. Many home loans have both annual (or semiannual) caps and lifetime caps, which limit the amount your payments can increase in an adjustment period and over the life of the loan. Many caps allow a rate increase of 2-5% over the starting interest rate in an adjustment period (for example, a starting rate of 5% could increase to 7% or, depending on the loan guidelines, to as much as 10%). A lender’s lifetime interest rate cap is typically 6% over the life of the loan.</Text>
      </View>
      </View>
      }
      {letter == 'J' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
        <Text style={styles.word}>Jumbo loan</Text>
      <Text style={styles.define}>Also known as a nonconforming loan. The amount of the loan exceeds standards that would make it eligible for sale to Fannie Mae and Freddie Mac. Certain geographical areas have temporary conforming loan limits higher than typical conforming limits. Lenders may charge additional fees and place certain restrictions due to the large loan amounts. </Text>
      </View>
      </View>
      }
      {letter == 'K' &&
      <View ><Text>No Definitions</Text></View>
      }
      {letter == 'L' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
        <Text style={styles.word}>Lien</Text>
      <Text style={styles.define}>The legal claim of a creditor on a borrower’s property, to be used as security for a debt. </Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Loan Estimate (LE)</Text>
      <Text style={styles.define}>Disclosure to help consumers understand the key loan terms and estimated costs of a mortgage before they make a complete application. After a consumer submits 6 key elements: name, income, social security number, property address, estimated property value and desired loan amount, the lender is required to provide this form. All lenders are required to use the same standard loan estimate form to make it easier for consumers to compare and shop for a mortgage. </Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Loan origination</Text>
      <Text style={styles.define}>The process by which a mortgage lender makes a home loan and records a mortgage against the borrower’s real property as security for repayment of the loan. </Text>
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.word}>Loan-to-value ratio (LTV)</Text>
      <Text style={styles.define}>The ratio between the unpaid principal amount of your loan, or your credit limit in the case of a line of credit, and the appraised value of your collateral. Expressed as a percentage. For example, if you have an $80,000 first mortgage on a property with an appraised value of $100,000, the LTV is 80% ($80,000 / $100,000 = 80%).</Text>
      </View>
      </View>
      }
      {letter == 'M' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
        <Text style={styles.word}>Margin</Text>
        <Text style={styles.define}>The number of percentage points the lender adds to or subtracts from the index rate to determine the interest rate adjustments. The margin is constant throughout the life of the mortgage and is specified in the promissory note.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Maturity Date</Text>
        <Text style={styles.define}>The day on which the outstanding principal, interest and fees on a loan must all be repaid.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Mortgage</Text>
        <Text style={styles.define}>A legal document giving a lender a lien on real estate to secure repayment of a loan. Mortgage loans generally run from 10 to 30 years, after which the loan is required to be paid off. Also called deed of trust and/or security deed.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Mortgage Insurance</Text>
        <Text style={styles.define}>For conventional loans, insurance that protects the lender if you default on your loan. If your down payment is less than 20%, most lenders will require you to pay mortgage insurance. Also called private mortgage insurance (PMI).</Text>
        </View>
      </View>
      }
      {letter == 'N' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Negative amortization</Text>
        <Text style={styles.define}>The result when monthly payments don’t cover all the interest due on the loan. The unpaid interest is added to the unpaid balance, which means the homebuyer will owe increasingly more than the original amount of the loan.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>No closing cost loan</Text>
        <Text style={styles.define}>A loan in which the borrower is not required to pay cash out-of-pocket at closing for the normal closing costs. The lender typically includes the closing costs in the principal balance or charges a higher interest rate than for a loan with closing costs to cover the advance of closing costs.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Notice of default</Text>
        <Text style={styles.define}>A formal written notice to a borrower that a default has occurred and that legal action may be taken.</Text>
        </View>
      </View>
      }
      {letter == 'O' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Option ARM</Text>
        <Text style={styles.define}>A type of adjustable-rate mortgage (ARM) that offers the borrower a choice of 4 monthly payment options to help provide financial flexibility to manage payments in rising rate markets and take advantage of falling interest rates.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Origination</Text>
        <Text style={styles.define}>The date that the proceeds of a loan are disbursed.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Origination fee</Text>
        <Text style={styles.define}>A fee imposed by a lender to cover certain processing expenses in connection with making a mortgage loan. Usually a percentage of the amount loaned (often 1%). The origination fee is stated in the form of points.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Owner financing</Text>
        <Text style={styles.define}>A property purchase transaction in which the property seller provides all or part of the financing.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Owner-occupied</Text>
        <Text style={styles.define}>A property that the owner occupies as a principal residence.</Text>
        </View>
      </View>
      }
      {letter == 'P' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Payment cap</Text>
        <Text style={styles.define}>A limit on how much a monthly payment can increase at any one time. Some adjustable-rate mortgages have payment caps in addition to annual (or semi-annual) interest rate caps and lifetime interest rate caps. Payment caps don’t limit the amount of interest charged and may cause negative amortization.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Payment change date</Text>
        <Text style={styles.define}>The date when a new monthly payment amount takes effect on an adjustable-rate mortgage (ARM). Generally, the payment change date occurs in the month immediately after the interest rate adjustment date. The borrower is notified 30 days before the new rate and payment take effect.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Payoff</Text>
        <Text style={styles.define}>Payment of the outstanding balance of a loan in full. Also, the amount required to pay the outstanding balance in full.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>PITI</Text>
        <Text style={styles.define}>An acronym for principal, interest, taxes and insurance. Also referred to as the monthly housing expense.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Points</Text>
        <Text style={styles.define}>An amount paid to the lender, typically at closing, to lower (or buy down) the interest rate. One discount point equals one percentage point of the loan amount. For example, 2 points on a $100,000 mortgage would cost $2,000. Negative points indicate the amount to be credited at closing to reduce closing costs. Also called discount points or mortgage points.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Preapproval</Text>
        <Text style={styles.define}>A lender’s conditional agreement to lend a specific amount of money to a homebuyer under a specified set of terms.</Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Principal & Interest</Text>
        <Text style={styles.define}>The principal is the amount of money borrowed on a loan. The interest is the charge paid for borrowing money. Principal and interest account for the majority of your mortgage payment, which may also include escrow payments for property taxes, homeowners insurance, mortgage insurance and any other costs that are paid monthly, or fees that may come due.</Text>
        </View>

      </View>
      }
      {letter == 'Q' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Qualifying ratios</Text>
        <Text style={styles.define}>
        Calculations that are used to determine whether a borrower can qualify for a mortgage. They consist of 2 separate calculations: a housing expense as a percent of income and total debt obligations as a percent of income.
        </Text>
        </View>
      </View>
      }
      {letter == 'R' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Rate</Text>
        <Text style={styles.define}>
        The amount of interest on a loan, expressed as a percentage.
        </Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Rate Lock</Text>
        <Text style={styles.define}>
        A commitment issued by a lender to a borrower guaranteeing a specific interest rate for a specified period of time. Rate lock periods are for a fixed number of days, and rate lock expiration occurs when that period has passed, subjecting the interest rate on the loan to market fluctuations since the date of the initial rate lock. When a rate lock expires, you will need to contact your lending specialist to establish a new rate lock prior to closing your loan.
        </Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Reamortize</Text>
        <Text style={styles.define}>
        To take the remaining balance of a mortgage loan and establish a new period of amortization after which the principal balance will be zero. Typically used after the end of the term of an interest-only loan.
        </Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Recording</Text>
        <Text style={styles.define}>
        A charge for a public official (typically a Registrar of Deeds or County Clerk) noting in the public record the terms of a legal document affecting title to real property such as a deed, a security instrument, a satisfaction of mortgage or an extension of mortgage.
        </Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Refinance</Text>
        <Text style={styles.define}>
        Paying off your existing loan with the proceeds from a new loan, generally using the same property as collateral, in order to take advantage of lower monthly payments, lower interest rates or save on financing costs.
        </Text>
        </View>
      </View>
      }
      {letter == 'S' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Security</Text>
        <Text style={styles.define}>
        The property that will be pledged as collateral for a loan. If the borrower defaults, the lender can sell the collateral to satisfy the debt.
        </Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Settlement</Text>
        <Text style={styles.define}>
        The completion of a property’s sale or purchase, or the completion of all steps necessary to receive the proceeds of (and create an obligation to repay) a loan.
        </Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Short Sale</Text>
        <Text style={styles.define}>
        A commonly used alternative to a foreclosure. If a homeowner can no longer afford to make mortgage payments and their home is worth less than they owe, a short sale allows them to sell the home to pay off the mortgage. In a short sale, the lender agrees to accept an amount less than is actually owed on the loan, based on a showing of financial hardship.
        </Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Start Rate</Text>
        <Text style={styles.define}>
        The starting interest rate for an adjustable-rate mortgage (ARM) loan or variable-rate home equity line of credit. Also known as an initial rate or intro rate. It provides lower interest and lower monthly payments at the beginning but may adjust at the next adjustment period.
        </Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Subordinate financing</Text>
        <Text style={styles.define}>
        Any mortgage or other lien that has a priority lower than that of the first mortgage. The subordinate loan has a claim to payment in a foreclosure only after the first mortgage is paid.
        </Text>
        </View>
      </View>
      }
      {letter == 'T' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Term</Text>
        <Text style={styles.define}>
        The number of years it will take to pay off a loan. The loan term is used to determine the payment amount, repayment schedule and total interest paid over the life of the loan.
        </Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Title</Text>
        <Text style={styles.define}>
        Written evidence of ownership in property.
        </Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Treasury Index</Text>
        <Text style={styles.define}>
        An index that is used to determine interest rate changes for certain adjustable-rate mortgage (ARM) plans. It is based on the results of auctions that the U.S. Treasury holds for its Treasury bills and securities or is derived from the U.S. Treasury’s daily yield curve, which is based on the closing market bid yields on actively traded Treasury securities in the over-the-counter market. 
        </Text>
        </View>
      </View>
      }
      {letter == 'U' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Underwriting</Text>
        <Text style={styles.define}>
        The lender’s process of deciding whether to make a loan to a potential borrower based on credit, employment, assets and other factors, and the matching of this risk to an appropriate rate, term and loan amount.
        </Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Unsecured Loans</Text>
        <Text style={styles.define}>
        Typically used when referring to a loan or a line of credit (unsecured loan, unsecured line of credit) that is not backed by collateral.
        </Text>
        </View>
      </View>
      }
      {letter == 'V' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
          <Text style={styles.word}>VA Loans</Text>
        <Text style={styles.define}>
        A mortgage that is guaranteed by the Department of Veterans Affairs (VA) for qualified veterans of U.S. military forces.
        </Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Variable Rate</Text>
        <Text style={styles.define}>
        An interest rate that may fluctuate or change periodically, often in relation to an index such as the prime rate or other criteria. Payments may increase or decrease accordingly.
        </Text>
        </View>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Variable-rate monthly minimum payment</Text>
        <Text style={styles.define}>
        The minimum amount you will need to pay each month on your home equity line of credit, or HELOC (does not include any payments for the Fixed- Rate Loan Payment Option). The payment amount includes both principal and interest (minimum of $100). The monthly required payment may vary each month and is based on your outstanding loan balance and fluctuating interest rate. In general, this payment is intended to repay your loan balance in substantially equal principal and interest installments over the remaining loan term, based on the balance and rate information at the time of each monthly calculation.
        </Text>
        </View>
      </View>
      }
      {letter == 'W' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
          <Text style={styles.word}>What-if Analysis</Text>
        <Text style={styles.define}>
        An affordability analysis that is based on a what-if scenario. A what-if analysis is useful if you do not have complete data or if you want to explore the effect of various changes to your income, liabilities, or available funds or to the qualifying ratios or down payment expenses that are used in the analysis.
        </Text>
        </View>
      </View>
      }
      {letter == 'X' &&
      <View><Text>No Definitions</Text></View>
      }
      {letter == 'Y' &&
      <View style={styles.container}>
        <View style={styles.wordbox}>
          <Text style={styles.word}>Year-end statement</Text>
        <Text style={styles.define}>
        The report shows how much was paid in interest during the year, as well as the remaining mortgage loan balance at the end of the year. If the bank has an impound account for you, it will also show how much was paid and reserved in property taxes. If the bank does not have a property tax impound account, then tax details are not displayed on the report.
        </Text>
        </View>
      </View>
      }
      {letter == 'Z' &&
      <View><Text>No Definitions</Text></View>
      }
    </View>
  );
}
const styles = StyleSheet.create({
  word: {
    fontSize:15,
    fontWeight:"700",
    width: width,
  },
  define:{
    fontSize:12,
  },
  wordbox:{
    paddingVertical:10,
  },
  container:{
    paddingBottom:100
  }
})

export default Definitions;
