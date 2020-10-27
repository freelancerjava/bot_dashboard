import React, {
    useEffect,
    useState
} from 'react';
import {
    useQuery
} from 'react-query';
import moment from 'moment';


import {
    Badge,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Row,
    Table,
    UncontrolledDropdown,
    UncontrolledTooltip
} from "reactstrap";
import {
    getReportsByGq
} from '../../../query';
import {
    TimeNav
} from '../../../extrafunc/Timenav';

export const ReportsList = () => {
    const [startDate, setStartDate] = useState(new Date(moment().format('MMM DD, YYYYY'))
    );
    const today = moment().dayOfYear() == moment(startDate).dayOfYear()

    const [reports, setreports] = useState([])

    const repdata = useQuery(["reports", {
        date: moment(startDate).format("YYYY-MM-DD")
    }], getReportsByGq)

    useEffect(() => {
        if (repdata.data) {
            setreports(repdata.data.reports.map((item) => {
                return item
            }))
        } else {
            setreports([])
        }
    }, [repdata.data]);

    return (
        <Card className="shadow" >
            <CardHeader className="border-0" >
                <h3 className="mb-0" > Расход подчиненных подразделений </h3> </CardHeader >
            <TimeNav today={today} startDate={startDate} setStartDate={setStartDate} />
            <Table className="align-items-center table-flush" responsive >
                <thead className="thead-light" >
                    <tr >
                        <th scope="col" > Наименование < br /> подразделения </th>
                        <th scope="col" > Категория </th>
                        <th scope="col" > Статус </th>
                        <th scope="col" > Исполнитель </th>
                        <th scope="col" > Процесс </th>
                        <th scope="col" />
                    </tr>
                </thead >
                <tbody >
                    {(reports.length > 0) ?
                        reports.map((item) => {
                            return (< tr className="row-transition">
                                < th scope="row" > {item.command.name} </th>
                                < td > $2, 500 USD </td>
                                < td >
                                    < Badge color=""
                                        className="badge-dot mr-4" >
                                        < i className="bg-warning" /> pending </Badge>
                                </td >
                                < td >
                                    <div className="avatar-group" >
                                        <a className="avatar avatar-sm"
                                            href="#pablo"
                                            id="tooltip742438047"
                                            onClick={e => e.preventDefault()
                                            } >
                                            < img alt="..."
                                                className="rounded-circle"
                                                src={require("../../../assets/img/theme/team-1-800x800.jpg")
                                                }
                                            />
                                        </a>
                                        < UncontrolledTooltip delay={0}
                                            target="tooltip742438047" >
                                            Ryan Tompson </UncontrolledTooltip>
                                        <a className="avatar avatar-sm"
                                            href="#pablo"
                                            id="tooltip941738690"
                                            onClick={e => e.preventDefault()
                                            } >
                                            < img alt="..."
                                                className="rounded-circle"
                                                src={require("../../../assets/img/theme/team-2-800x800.jpg")
                                                }
                                            />
                                        </a>
                                        < UncontrolledTooltip delay={0}
                                            target="tooltip941738690" >
                                            Romina Hadid </UncontrolledTooltip>
                                        <a className="avatar avatar-sm"
                                            href="#pablo"
                                            id="tooltip804044742"
                                            onClick={e => e.preventDefault()
                                            } >
                                            < img alt="..."
                                                className="rounded-circle"
                                                src={require("../../../assets/img/theme/team-3-800x800.jpg")
                                                }
                                            />
                                        </a >
                                        < UncontrolledTooltip delay={0}
                                            target="tooltip804044742" >
                                            Alexander Smith </UncontrolledTooltip>
                                        < a className="avatar avatar-sm"
                                            href="#pablo"
                                            id="tooltip996637554"
                                            onClick={e => e.preventDefault()
                                            } >
                                            < img alt="..."
                                                className="rounded-circle"
                                                src={require("../../../assets/img/theme/team-4-800x800.jpg")}
                                            /> </a >
                                        < UncontrolledTooltip delay={0}
                                            target="tooltip996637554" >
                                            Jessica Doe </UncontrolledTooltip>
                                    </div >
                                </td>
                                < td >
                                    < div className="d-flex align-items-center" >
                                        < span className="mr-2" > 60 % </span>
                                        < div >
                                            < Progress max="100"
                                                value="60"
                                                barClassName="bg-danger" />
                                        </div>
                                    </div >
                                </td>
                                < td className="text-right" >
                                    < UncontrolledDropdown >
                                        < DropdownToggle className="btn-icon-only text-light"
                                            href="#pablo"
                                            role="button"
                                            size="sm"
                                            color=""
                                            onClick={e => e.preventDefault()
                                            } >
                                            < i className="fas fa-ellipsis-v" />
                                        </DropdownToggle>
                                        < DropdownMenu className="dropdown-menu-arrow" right >
                                            < DropdownItem
                                            // href={`${apiUrl}${item.file[0].url}`} download _blank
                                            >
                                                Скачать прикреплённый файл </DropdownItem>
                                            < DropdownItem href="#pablo"
                                                onClick={e => e.preventDefault()} >Another action </DropdownItem>
                                            < DropdownItem href="#pablo"
                                                onClick={e => e.preventDefault()} >Something else here </DropdownItem>
                                        </DropdownMenu >
                                    </UncontrolledDropdown>
                                </td>
                            </tr>
                            )
                        }) :
                        <tr>
                            <div className="p-2 d-flex justify-content-center">
                                Пусто
                            </div>
                        </tr>
                    }
                </tbody>
            </Table >
            <CardFooter className="py-4" >
                <nav aria-label="..." >
                    {/* <Pagination className="pagination justify-content-end mb-0"
                        listClassName="justify-content-end mb-0" >
                        <PaginationItem className="disabled" >
                            <PaginationLink href="#pablo"
                                onClick={e => e.preventDefault()}
                                tabIndex="-1" >
                                <i className="fas fa-angle-left" />
                                <span className="sr-only" > Previous </span> </PaginationLink >
                        </PaginationItem>
                        <PaginationItem className="active" >
                            <PaginationLink href="#pablo" onClick={e => e.preventDefault()} >
                                1 </PaginationLink>
                        </PaginationItem >
                        <PaginationItem >
                            <PaginationLink href="#pablo" onClick={e => e.preventDefault()} >
                                2 < span className="sr-only" > (current) </span> </PaginationLink >
                        </PaginationItem>
                        <PaginationItem >
                            <PaginationLink href="#pablo"
                                onClick={e => e.preventDefault()} >
                                3 </PaginationLink>
                        </PaginationItem >
                        <PaginationItem >
                            <PaginationLink href="#pablo"
                                onClick={e => e.preventDefault()} >
                                <i className="fas fa-angle-right" />
                                <span className="sr-only" > Next </span> </PaginationLink >
                        </PaginationItem>
                    </Pagination > */}
                </nav>
            </CardFooter >
        </Card>
    );
}

export default ReportsList;