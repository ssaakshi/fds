"use client";
import dayjs, { Dayjs } from 'dayjs';
import { useState ,useEffect} from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styles from "./dateTime.module.css"


const DateTime = ({ item }) => {

    const [value, setValue] = useState(dayjs('2022-04-17'));


    useEffect(()=>{
        console.log(value);

    }, [])
    return (

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label="From Date:"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            className={styles.datePicker}
          />

        </DemoContainer>

      </LocalizationProvider>

    );
};

export default DateTime;


