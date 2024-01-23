import styles from '@/styles/dashboard.module.css'
import { useState, useEffect } from 'react'
import moment from 'moment'

import useDashborad from '@/hooks/useDashboard'
import useCompanies from '@/hooks/useCompanies'

const Dashboard = () => {
    const [counters, setCounters] = useState({})
    const [attendants, setAttendants] = useState([])
    const [filterType, setFilterType] = useState(1)
    const [period, setPeriod] = useState(0)
    const [companyDueDate, setCompanyDueDate] = useState()
    const [dateFrom, setDateFrom] = useState(
        moment("1", "D").format("YYYY-MM-DD")
    )
    const [dateTo, setDateTo] = useState(moment().format("YYYY-MM-DD"))
    const [loading, setLoading] = useState(false);
    const { find } = useDashboard();
    const { finding } = useCompanies();
    useEffect(() => {
        async function firstLoad() {
        await fetchData();
        }
        setTimeout(() => {
        firstLoad();
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}