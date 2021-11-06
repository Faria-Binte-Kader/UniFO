import '../../App.css';
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { BrowserRouter, Link, useHistory, Route } from 'react-router-dom';
import CardItem from '../CardItem'
import './UniList.css'
import UniProfileScreen from './UniProfileScreen';
import UniProfile from './UniProfile';

function UniList() {
    let history = useHistory();

    const [listOfUniversity, setUniversity] = useState([]);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [click, setClick] = useState(false);

    const HandleClick = () => {
        setClick(!click);
        if (click === false) {
            HandleSearchAll(name, location, type);
        }
        else {
            HandleSearchAllUp(name, location, type);
        }
    }

    useEffect(() => {
        getAllUniversity();
    }, []);

    const getAllUniversity = () => {
        Axios.post('http://localhost:3001/uniList', {
        }).then((response) => {
            setUniversity(response.data);
            //console(response.data);
        })
    };
    const getAllUniversitySortDown = () => {
        Axios.post('http://localhost:3001/sortdown', {
        }).then((response) => {
            setUniversity(response.data);
            //console(response.data);
        })
    };
    const getAllUniversitySortUp = () => {
        Axios.post('http://localhost:3001/sortup', {
        }).then((response) => {
            setUniversity(response.data);
            //console(response.data);
        })
    };

    /*
    const HandleSearch = () => {
        Axios.post('http://localhost:3001/uniListSearchName', {
            Name: name
        }).then((response) => {
            setUniversity(response.data);
            //console(response.data);
        })
    }*/

    const HandleSearchAll = (name, location, type) => {
        if (name == "" && (location == "" || location == "Choose Location") && (type == "" || type == "Choose Type")) {
            getAllUniversitySortDown();
        }
        else if (name != "" && (location == "" || location == "Choose Location") && (type == "" || type == "Choose Type")) {
            Axios.post('http://localhost:3001/uniListSearchName', {
                Name: name
            }).then((response) => {
                setUniversity(response.data);
                //console(response.data);
            })
        }
        else if (name == "" && (location != "" && location != "Choose Location") && (type == "" || type == "Choose Type")) {
            Axios.post('http://localhost:3001/uniListSearchLocation', {
                Location: location
            }).then((response) => {
                setUniversity(response.data);
                //console(response.data);
            })
        }
        else if (name != "" && (location != "" && location != "Choose Location") && (type == "" || type == "Choose Type")) {
            Axios.post('http://localhost:3001/uniListSearchNameLocation', {
                Name: name,
                Location: location
            }).then((response) => {
                setUniversity(response.data);
                //console(response.data);
            })
        }
        else if (name == "" && (location == "" || location == "Choose Location") && (type != "" && type != "Choose Type")) {
            Axios.post('http://localhost:3001/uniListSearchType', {
                Type: type
            }).then((response) => {
                setUniversity(response.data);
                //console(response.data);
            })
        }
        else if (name != "" && (location == "" || location == "Choose Location") && (type != "" && type != "Choose Type")) {
            Axios.post('http://localhost:3001/uniListSearchNameType', {
                Name: name,
                Type: type
            }).then((response) => {
                setUniversity(response.data);
                //console(response.data);
            })
        }
        else if (name == "" && (location != "" && location != "Choose Location") && (type != "" && type != "Choose Type")) {
            Axios.post('http://localhost:3001/uniListSearchLocationType', {
                Location: location,
                Type: type
            }).then((response) => {
                setUniversity(response.data);
                //console(response.data);
            })
        }
        else if (name != "" && (location != "" && location != "Choose Location") && (type != "" && type != "Choose Type")) {
            Axios.post('http://localhost:3001/uniListSearchNameLocationType', {
                Name: name,
                Location: location,
                Type: type
            }).then((response) => {
                setUniversity(response.data);
                //console(response.data);
            })
        }
    }

    const HandleSearchAllUp = (name, location, type) => {
        if (name == "" && (location == "" || location == "Choose Location") && (type == "" || type == "Choose Type")) {
            getAllUniversitySortUp();
        }
        else if (name != "" && (location == "" || location == "Choose Location") && (type == "" || type == "Choose Type")) {
            Axios.post('http://localhost:3001/uniListSearchNameUp', {
                Name: name
            }).then((response) => {
                setUniversity(response.data);
                //console(response.data);
            })
        }
        else if (name == "" && (location != "" && location != "Choose Location") && (type == "" || type == "Choose Type")) {
            Axios.post('http://localhost:3001/uniListSearchLocationUp', {
                Location: location
            }).then((response) => {
                setUniversity(response.data);
                //console(response.data);
            })
        }
        else if (name != "" && (location != "" && location != "Choose Location") && (type == "" || type == "Choose Type")) {
            Axios.post('http://localhost:3001/uniListSearchNameLocationUp', {
                Name: name,
                Location: location
            }).then((response) => {
                setUniversity(response.data);
                //console(response.data);
            })
        }
        else if (name == "" && (location == "" || location == "Choose Location") && (type != "" && type != "Choose Type")) {
            Axios.post('http://localhost:3001/uniListSearchTypeUp', {
                Type: type
            }).then((response) => {
                setUniversity(response.data);
                //console(response.data);
            })
        }
        else if (name != "" && (location == "" || location == "Choose Location") && (type != "" && type != "Choose Type")) {
            Axios.post('http://localhost:3001/uniListSearchNameTypeUp', {
                Name: name,
                Type: type
            }).then((response) => {
                setUniversity(response.data);
                //console(response.data);
            })
        }
        else if (name == "" && (location != "" && location != "Choose Location") && (type != "" && type != "Choose Type")) {
            Axios.post('http://localhost:3001/uniListSearchLocationTypeUp', {
                Location: location,
                Type: type
            }).then((response) => {
                setUniversity(response.data);
                //console(response.data);
            })
        }
        else if (name != "" && (location != "" && location != "Choose Location") && (type != "" && type != "Choose Type")) {
            Axios.post('http://localhost:3001/uniListSearchNameLocationTypeUp', {
                Name: name,
                Location: location,
                Type: type
            }).then((response) => {
                setUniversity(response.data);
                //console(response.data);
            })
        }
    }




    const handleSubmit = e => {
        e.preventDefault();
    }

    return (

        <div className="UniList">
            <h1>All Universities</h1>

            <div className='searchbar' >
                <form className='searchform' onSubmit={(e) => {
                    handleSubmit(e);

                }}>
                    <input type="text"
                        placeholder="Search"
                        onChange={e => {
                            const selectedState = e.target.value;
                            setName(selectedState);
                            HandleSearchAll(selectedState, location, type);
                        }}
                    />
                </form>
            </div>
            <div className='sortbtn' onClick={HandleClick}>
                <p>SORT</p>
                <i className={click ? 'fas fa-sort-up' : 'fas fa-sort-down'} />
            </div>
            <div className='select'>
                <select className="searchLocation"
                    onChange={(e) => {
                        const selectedState = e.target.value;
                        setLocation(selectedState);
                        HandleSearchAll(name, selectedState, type);
                    }}>
                    <option value='Choose Location'>Choose Location</option>
                    <option value='Dhaka'>Dhaka</option>
                    <option value='Rajshahi'>Rajshahi</option>
                    <option value='Chittagong'>Chittagong</option>
                    <option value='Barisal'>Barisal</option>
                    <option value='Khulna'>Khulna</option>
                    <option value='Sylhet'>Sylhet</option>
                    <option value='Rangpur'>Rangpur</option>
                </select>
            </div>

            <div className='select'>
                <select className="searchType"
                    onChange={(e) => {
                        const selectedState = e.target.value;
                        setType(selectedState);
                        HandleSearchAll(name, location, selectedState);
                    }}>
                    <option value='Choose Type'>Choose Type</option>
                    <option value='Public'>Public</option>
                    <option value='Private'>Private</option>
                    <option value='International'>International</option>
                </select>
            </div>

            {listOfUniversity.map((values, key) => {
                return (
                    <div className='cards__container_university'>
                        <div className='cards__wrapper' >
                            <ul className='cards__items_uni'
                                onClick={() => {
                                    localStorage.setItem('uniEmailUniList', values.Email);
                                }}>
                                <CardItem
                                    src={values.imageURL}
                                    text={values.Name}
                                    label='University_preview_card'
                                    path='/uniprofilescreen'
                                />
                            </ul>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default UniList