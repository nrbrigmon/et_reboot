import React from 'react';
import Button from '@material-ui/core/Button';

export default [{
        headline: 'Developed Acres'
        ,content: 'A measurement of the number of acres developed in this scenario. Ideally, this will be parsed into the amount of vacant acres versus developed acres.'
        ,component: <Button href="https://www.google.com" 
		target="_blank" > Learn More </Button>
        ,metric: 'developedAcreage'
    },{
        headline: 'Land Use By Type'
        ,content: 'As you make changes, building types fall into a variety of categories: Single Family, Multifamily, etc. These an be tweaked as planning standards evolve.'
        ,component: <Button href="https://www.google.com"  		target="_blank" > Learn More </Button>
        ,metric: 'landUse'
    }
    ,{
        headline: 'Population'
        ,content: 'Every building has an estimated capacity for people it can hold. When you make impacts, this will calculate the percentage of each building added and give you hard numbers.'
        ,component: <Button href="https://www.google.com"  		target="_blank" > Learn More </Button>
        ,metric: 'population'
    }
    ,{
        headline: 'Housing by Type'
        ,content: 'With respect to residential buildings, this indicator will parse out the types of buildings that people can call home. These an be tweaked as planning standards evolve.'
        ,component: <Button href="https://www.google.com"  		target="_blank" > Learn More </Button>
        ,metric: 'housingByType'
    }
    ,{
        headline: 'Employment by Type'
        ,content: 'With respect to commercial, office, and industrial buildings, this indicator will parse out the types of buildings that people can call the workplace. These an be tweaked as planning standards evolve.'
        ,component: <Button href="https://www.google.com"  		target="_blank" > Learn More </Button>
        ,metric: 'employmentByType'
    }
    ,{
        headline: 'Jobs'
        ,content: 'Every building has an estimated capacity for employees it can hold. When you make impacts, this will calculate the percentage of each building added and give you hard numbers.'
        ,component: <Button href="https://www.google.com"  		target="_blank" > Learn More </Button>
        ,metric: 'jobTotals'
    }
    ,{
        headline: 'People per Acre'
        ,content: 'This indicator is a combination of the population added and the amount of acreage developed.'
        ,component: <Button href="https://www.google.com"  		target="_blank" > Learn More </Button>
        ,metric: 'peoplePerAcre'
    }
    ,{
        headline: 'Jobs per Acre'
        ,content: 'This indicator is a combination of the jobs added and the amount of acreage developed.'
        ,component: <Button href="https://www.google.com"  		target="_blank" > Learn More </Button>
        ,metric: 'jobsPerAcre'
    }
    ,{
        headline: 'School Aged Children'
        ,content: 'Every building has an estimated capacity for people it can hold. Different communities have different averages for the number of school children present. Suburban environments often have higher percentages of children than downtown cores. This will calculate these percentages and give you hard numbers.'
        ,component: <Button href="https://www.google.com"  		target="_blank" > Learn More </Button>
        ,metric: 'schoolChildren'
    }
    ,{
        headline: 'Average Household Size'
        ,content: 'Every building has an estimated capacity for the number of housing units or households it can hold. This indicator tracks the average size of those buildings across land areas. When you make impacts, this will calculate the percentage give you hard numbers.'
        ,component: <Button href="https://www.google.com"  		target="_blank" > Learn More </Button>
        ,metric: 'householdSizeAvg'
    }
    ,{
        headline: 'Households'
        ,content: 'Every building has an estimated capacity for the number of housing units or households it can hold. When you make impacts, this will calculate the percentage of each building added and give you hard numbers.'
        ,component: <Button href="https://www.google.com"  		target="_blank" > Learn More </Button>
        ,metric: 'householdTotals'
    }]
    
    
    