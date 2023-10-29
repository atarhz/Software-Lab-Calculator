import { useContext, useState } from 'react'
import React from 'react';
import { useEffect } from 'react'

export default function Calculator() {
    
    const [inputNum, setInputNum] = useState<number>(0)
    const [monitor, setMonitor] = useState<number>(0);
    const [decimal, setDecimal] = useState<boolean>(false);
    const [decimalcount, setDecimalCount] = useState<number>(1);
    const [operator, setOperator] = useState<string>('');
    const [calculatednum, setCalculatednum] = useState<number>(0);

    useEffect(() => {
        setMonitor(inputNum);
    }, [inputNum])

    useEffect(() => {
        setMonitor(calculatednum);
    }, [calculatednum])

    //recieve number from input button
    const inputNumTotal = (num: number) => {
        if (decimal) {
            num = num / Math.pow(10, decimalcount);
            setDecimalCount(decimalcount + 1);
            setInputNum(parseFloat((inputNum + num).toFixed(decimalcount)))
        } else {
            setInputNum(inputNum * 10 + num)
        }

    }

    //receive operator from input button
    const inputOperator = (operator: string) => {
        setOperator(operator);
        calculate();
        setInputNum(0)
    }

    //calculate
    const calculate = () => {
        
    }

    //get equation
    const equal = () => {
        calculate();
        setOperator('')
    }

    //clear all
    const clearall = () => {
        setInputNum(0);
        setCalculatednum(0);
        setMonitor(0);
        setOperator('')
    }

    return <>
        
    </>
}