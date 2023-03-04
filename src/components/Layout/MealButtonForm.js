import React from 'react'
import classes from './MealButtonForm.module.css'
const MealButtonForm = () => {

    return (
                <form className={classes.mealForm}>
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name="amount" id="amount" />
                    </div>
                    <div>
                        <button type="submit">+Add</button>
                    </div>
                </form>
    )
}

export default MealButtonForm