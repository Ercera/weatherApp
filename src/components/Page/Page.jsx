import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';
import styles from './Page.module.css';
import useForecast from '../../hooks/useForecast';


const Page = () => {
    const { isError, isLoading, forecast } = useForecast(); // 
    return ( // флажки для распределения действий и их последовательности
        <Fragment>
            <Header />
            <div className={styles.box}>
                {/* Form */}
                {!isLoading && <Form />}
                {/* Error запись сообщения об ошибке в error*/} 
                {isError && <Error message={isError} />}
                {/* Loader */}
                {isLoading && <Loader />}
            </div>
            {/* Forecast */}
            {forecast && <Forecast />}
        </Fragment>
    );
};

export default Page;
