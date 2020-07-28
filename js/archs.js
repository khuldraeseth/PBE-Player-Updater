const archs = {
    "batting": {
        "mrUtility": {
            "attrs": {
                "min": {
                    "BABIP vs LHP": 30,
                    "BABIP vs RHP": 30,
                    "Avoid K vs LHP": 30,
                    "Avoid K vs RHP": 30,
                    "Gap vs LHP": 25,
                    "Gap vs RHP": 25,
                    "Power vs LHP": 25,
                    "Power vs RHP": 25,
                    "Eye/Patience vs LHP": 30,
                    "Eye/Patience vs RHP": 30,
                    "Speed": 25,
                    "Stealing": 25,
                    "Bunting": 5,
                    "Fielding Range": 45,
                    "Fielding Error": 35,
                    "Fielding/Catching Arm": 35,
                    "Turn Double Play": 30,
                    "Catcher Ability": 25
                },
                "max": {
                    "BABIP vs LHP": 85,
                    "BABIP vs RHP": 85,
                    "Avoid K vs LHP": 75,
                    "Avoid K vs RHP": 75,
                    "Gap vs LHP": 75,
                    "Gap vs RHP": 75,
                    "Power vs LHP": 70,
                    "Power vs RHP": 70,
                    "Eye/Patience vs LHP": 80,
                    "Eye/Patience vs RHP": 80,
                    "Speed": 60,
                    "Stealing": 60,
                    "Bunting": 40,
                    "Fielding Range": 85,
                    "Fielding Error": 75,
                    "Fielding/Catching Arm": 70,
                    "Turn Double Play": 70,
                    "Catcher Ability": 75
                }
            }
        },
        "theStreak": {
            "attrs": {
                "min": {
                    "BABIP vs LHP": 35,
                    "BABIP vs RHP": 35,
                    "Avoid K vs LHP": 35,
                    "Avoid K vs RHP": 35,
                    "Gap vs LHP": 35,
                    "Gap vs RHP": 35,
                    "Power vs LHP": 30,
                    "Power vs RHP": 30,
                    "Eye/Patience vs LHP": 35,
                    "Eye/Patience vs RHP": 35,
                    "Speed": 50,
                    "Stealing": 50,
                    "Bunting": 35,
                    "Fielding Range": 40,
                    "Fielding Error": 30,
                    "Fielding/Catching Arm": 25,
                    "Turn Double Play": 35,
                    "Catcher Ability": 5
                },
                "max": {
                    "BABIP vs LHP": 90,
                    "BABIP vs RHP": 90,
                    "Avoid K vs LHP": 75,
                    "Avoid K vs RHP": 75,
                    "Gap vs LHP": 70,
                    "Gap vs RHP": 70,
                    "Power vs LHP": 65,
                    "Power vs RHP": 65,
                    "Eye/Patience vs LHP": 75,
                    "Eye/Patience vs RHP": 75,
                    "Speed": 85,
                    "Stealing": 85,
                    "Bunting": 70,
                    "Fielding Range": 90,
                    "Fielding Error": 70,
                    "Fielding/Catching Arm": 60,
                    "Turn Double Play": 80,
                    "Catcher Ability": 10
                }
            }
        },
        "handyMan": {
            "attrs": {
                "min": {
                    "BABIP vs LHP": 30,
                    "BABIP vs RHP": 30,
                    "Avoid K vs LHP": 30,
                    "Avoid K vs RHP": 30,
                    "Gap vs LHP": 25,
                    "Gap vs RHP": 25,
                    "Power vs LHP": 25,
                    "Power vs RHP": 25,
                    "Eye/Patience vs LHP": 30,
                    "Eye/Patience vs RHP": 30,
                    "Speed": 25,
                    "Stealing": 10,
                    "Bunting": 40,
                    "Fielding Range": 20,
                    "Fielding Error": 45,
                    "Fielding/Catching Arm": 30,
                    "Turn Double Play": 20,
                    "Catcher Ability": 45
                },
                "max": {
                    "BABIP vs LHP": 80,
                    "BABIP vs RHP": 80,
                    "Avoid K vs LHP": 70,
                    "Avoid K vs RHP": 70,
                    "Gap vs LHP": 70,
                    "Gap vs RHP": 70,
                    "Power vs LHP": 75,
                    "Power vs RHP": 75,
                    "Eye/Patience vs LHP": 85,
                    "Eye/Patience vs RHP": 85,
                    "Speed": 50,
                    "Stealing": 25,
                    "Bunting": 75,
                    "Fielding Range": 70,
                    "Fielding Error": 90,
                    "Fielding/Catching Arm": 70,
                    "Turn Double Play": 60,
                    "Catcher Ability": 90
                }
            }
        },
        "theCannon": {
            "attrs": {
                "min": {
                    "BABIP vs LHP": 25,
                    "BABIP vs RHP": 25,
                    "Avoid K vs LHP": 25,
                    "Avoid K vs RHP": 25,
                    "Gap vs LHP": 30,
                    "Gap vs RHP": 30,
                    "Power vs LHP": 40,
                    "Power vs RHP": 40,
                    "Eye/Patience vs LHP": 40,
                    "Eye/Patience vs RHP": 40,
                    "Speed": 15,
                    "Stealing": 5,
                    "Bunting": 5,
                    "Fielding Range": 25,
                    "Fielding Error": 30,
                    "Fielding/Catching Arm": 45,
                    "Turn Double Play": 25,
                    "Catcher Ability": 20
                },
                "max": {
                    "BABIP vs LHP": 60,
                    "BABIP vs RHP": 60,
                    "Avoid K vs LHP": 65,
                    "Avoid K vs RHP": 65,
                    "Gap vs LHP": 80,
                    "Gap vs RHP": 80,
                    "Power vs LHP": 95,
                    "Power vs RHP": 95,
                    "Eye/Patience vs LHP": 80,
                    "Eye/Patience vs RHP": 80,
                    "Speed": 40,
                    "Stealing": 30,
                    "Bunting": 25,
                    "Fielding Range": 75,
                    "Fielding Error": 80,
                    "Fielding/Catching Arm": 100,
                    "Turn Double Play": 70,
                    "Catcher Ability": 80
                }
            }
        },
        "magician": {
            "attrs": {
                "min": {
                    "BABIP vs LHP": 30,
                    "BABIP vs RHP": 30,
                    "Avoid K vs LHP": 40,
                    "Avoid K vs RHP": 40,
                    "Gap vs LHP": 30,
                    "Gap vs RHP": 30,
                    "Power vs LHP": 20,
                    "Power vs RHP": 20,
                    "Eye/Patience vs LHP": 35,
                    "Eye/Patience vs RHP": 35,
                    "Speed": 40,
                    "Stealing": 40,
                    "Bunting": 40,
                    "Fielding Range": 40,
                    "Fielding Error": 40,
                    "Fielding/Catching Arm": 35,
                    "Turn Double Play": 40,
                    "Catcher Ability": 5
                },
                "max": {
                    "BABIP vs LHP": 80,
                    "BABIP vs RHP": 80,
                    "Avoid K vs LHP": 85,
                    "Avoid K vs RHP": 85,
                    "Gap vs LHP": 65,
                    "Gap vs RHP": 65,
                    "Power vs LHP": 50,
                    "Power vs RHP": 50,
                    "Eye/Patience vs LHP": 75,
                    "Eye/Patience vs RHP": 75,
                    "Speed": 70,
                    "Stealing": 70,
                    "Bunting": 80,
                    "Fielding Range": 95,
                    "Fielding Error": 90,
                    "Fielding/Catching Arm": 80,
                    "Turn Double Play": 90,
                    "Catcher Ability": 10
                }
            }
        },
        "bigManOnCampus": {
            "attrs": {
                "min": {
                    "BABIP vs LHP": 25,
                    "BABIP vs RHP": 25,
                    "Avoid K vs LHP": 25,
                    "Avoid K vs RHP": 25,
                    "Gap vs LHP": 35,
                    "Gap vs RHP": 35,
                    "Power vs LHP": 40,
                    "Power vs RHP": 40,
                    "Eye/Patience vs LHP": 30,
                    "Eye/Patience vs RHP": 30,
                    "Speed": 5,
                    "Stealing": 5,
                    "Bunting": 5,
                    "Fielding Range": 20,
                    "Fielding Error": 20,
                    "Fielding/Catching Arm": 10,
                    "Turn Double Play": 10,
                    "Catcher Ability": 25
                },
                "max": {
                    "BABIP vs LHP": 70,
                    "BABIP vs RHP": 70,
                    "Avoid K vs LHP": 70,
                    "Avoid K vs RHP": 70,
                    "Gap vs LHP": 95,
                    "Gap vs RHP": 95,
                    "Power vs LHP": 100,
                    "Power vs RHP": 100,
                    "Eye/Patience vs LHP": 90,
                    "Eye/Patience vs RHP": 90,
                    "Speed": 25,
                    "Stealing": 10,
                    "Bunting": 10,
                    "Fielding Range": 50,
                    "Fielding Error": 40,
                    "Fielding/Catching Arm": 40,
                    "Turn Double Play": 40,
                    "Catcher Ability": 65
                }
            }
        },
        "theFreak": {
            "attrs": {
                "min": {
                    "BABIP vs LHP": 25,
                    "BABIP vs RHP": 25,
                    "Avoid K vs LHP": 20,
                    "Avoid K vs RHP": 20,
                    "Gap vs LHP": 30,
                    "Gap vs RHP": 30,
                    "Power vs LHP": 45,
                    "Power vs RHP": 45,
                    "Eye/Patience vs LHP": 30,
                    "Eye/Patience vs RHP": 30,
                    "Speed": 30,
                    "Stealing": 30,
                    "Bunting": 5,
                    "Fielding Range": 40,
                    "Fielding Error": 30,
                    "Fielding/Catching Arm": 40,
                    "Turn Double Play": 25,
                    "Catcher Ability": 5
                },
                "max": {
                    "BABIP vs LHP": 90,
                    "BABIP vs RHP": 90,
                    "Avoid K vs LHP": 75,
                    "Avoid K vs RHP": 75,
                    "Gap vs LHP": 70,
                    "Gap vs RHP": 70,
                    "Power vs LHP": 65,
                    "Power vs RHP": 65,
                    "Eye/Patience vs LHP": 75,
                    "Eye/Patience vs RHP": 75,
                    "Speed": 85,
                    "Stealing": 85,
                    "Bunting": 70,
                    "Fielding Range": 90,
                    "Fielding Error": 70,
                    "Fielding/Catching Arm": 60,
                    "Turn Double Play": 80,
                    "Catcher Ability": 10
                }
            }
        }
    },
    "pitching": {
        "flamethrowerSP": {
            "attrs": {
                "min": {
                    "Movement vs LHB": 30,
                    "Movement vs RHB": 30,
                    "Control vs LHB": 30,
                    "Control vs RHB": 30,
                    "Stamina": 50,
                    "Holding Runners": 40,
                    "Pitch 1": 50,
                    "Pitch 2": 30,
                    "Pitch 3": 30,
                    "Pitch 4": 40,
                    "Pitch 5": 40,
                    "Velocity": "94-96"
                },
                "max": {
                    "Movement vs LHB": 95,
                    "Movement vs RHB": 95,
                    "Control vs LHB": 75,
                    "Control vs RHB": 75,
                    "Stamina": 85,
                    "Holding Runners": 85,
                    "Pitch 1": 95,
                    "Pitch 2": 85,
                    "Pitch 3": 80,
                    "Pitch 4": 70,
                    "Pitch 5": 60,
                    "Velocity": "98-100"
                },
                "gb%": 51
            }
        },
        "controlFreakSP": {
            "attrs": {
                "min": {
                    "Movement vs LHB": 40,
                    "Movement vs RHB": 40,
                    "Control vs LHB": 40,
                    "Control vs RHB": 40,
                    "Stamina": 50,
                    "Holding Runners": 40,
                    "Pitch 1": 45,
                    "Pitch 2": 40,
                    "Pitch 3": 40,
                    "Pitch 4": 40,
                    "Pitch 5": 40,
                    "Velocity": "90-92"
                },
                "max": {
                    "Movement vs LHB": 85,
                    "Movement vs RHB": 85,
                    "Control vs LHB": 95,
                    "Control vs RHB": 95,
                    "Stamina": 75,
                    "Holding Runners": 85,
                    "Pitch 1": 95,
                    "Pitch 2": 85,
                    "Pitch 3": 75,
                    "Pitch 4": 70,
                    "Pitch 5": 60,
                    "Velocity": "95-97"
                },
                "gb%": 57
            }
        },
        "knuckler": {
            "attrs": {
                "min": {
                    "Movement vs LHB": 30,
                    "Movement vs RHB": 30,
                    "Control vs LHB": 35,
                    "Control vs RHB": 35,
                    "Stamina": 20,
                    "Holding Runners": 30,
                    "Pitch 1": 40,
                    "Pitch 2": 30,
                    "Pitch 3": 30,
                    "Pitch 4": 40,
                    "Pitch 5": 0,
                    "Velocity": "75-80"
                },
                "max": {
                    "Movement vs LHB": 90,
                    "Movement vs RHB": 90,
                    "Control vs LHB": 85,
                    "Control vs RHB": 85,
                    "Stamina": 70,
                    "Holding Runners": 85,
                    "Pitch 1": 95,
                    "Pitch 2": 90,
                    "Pitch 3": 90,
                    "Pitch 4": 80,
                    "Pitch 5": 0,
                    "Velocity": "91-93"
                },
                "gb%": 45
            }
        },
        "junkballerSP": {
            "attrs": {
                "min": {
                    "Movement vs LHB": 40,
                    "Movement vs RHB": 40,
                    "Control vs LHB": 40,
                    "Control vs RHB": 40,
                    "Stamina": 50,
                    "Holding Runners": 40,
                    "Pitch 1": 50,
                    "Pitch 2": 45,
                    "Pitch 3": 45,
                    "Pitch 4": 40,
                    "Pitch 5": 40,
                    "Velocity": "88-90"
                },
                "max": {
                    "Movement vs LHB": 90,
                    "Movement vs RHB": 90,
                    "Control vs LHB": 85,
                    "Control vs RHB": 85,
                    "Stamina": 75,
                    "Holding Runners": 85,
                    "Pitch 1": 95,
                    "Pitch 2": 90,
                    "Pitch 3": 90,
                    "Pitch 4": 80,
                    "Pitch 5": 70,
                    "Velocity": "94-96"
                },
                "gb%": 65
            }
        },
        "flamethrowerRP": {
            "attrs": {
                "min": {
                    "Movement vs LHB": 40,
                    "Movement vs RHB": 40,
                    "Control vs LHB": 40,
                    "Control vs RHB": 40,
                    "Stamina": 10,
                    "Holding Runners": 40,
                    "Pitch 1": 50,
                    "Pitch 2": 50,
                    "Pitch 3": 40,
                    "Pitch 4": 40,
                    "Pitch 5": 40,
                    "Velocity": "93-95"
                },
                "max": {
                    "Movement vs LHB": 95,
                    "Movement vs RHB": 95,
                    "Control vs LHB": 75,
                    "Control vs RHB": 75,
                    "Stamina": 40,
                    "Holding Runners": 90,
                    "Pitch 1": 95,
                    "Pitch 2": 90,
                    "Pitch 3": 80,
                    "Pitch 4": 70,
                    "Pitch 5": 60,
                    "Velocity": "100"
                },
                "gb%": 51
            }
        },
        "controlFreakRP": {
            "attrs": {
                "min": {
                    "Movement vs LHB": 50,
                    "Movement vs RHB": 50,
                    "Control vs LHB": 50,
                    "Control vs RHB": 50,
                    "Stamina": 10,
                    "Holding Runners": 40,
                    "Pitch 1": 55,
                    "Pitch 2": 50,
                    "Pitch 3": 40,
                    "Pitch 4": 40,
                    "Pitch 5": 40,
                    "Velocity": "91-93"
                },
                "max": {
                    "Movement vs LHB": 85,
                    "Movement vs RHB": 85,
                    "Control vs LHB": 95,
                    "Control vs RHB": 95,
                    "Stamina": 30,
                    "Holding Runners": 90,
                    "Pitch 1": 100,
                    "Pitch 2": 85,
                    "Pitch 3": 80,
                    "Pitch 4": 70,
                    "Pitch 5": 60,
                    "Velocity": "96-98"
                },
                "gb%": 59
            }
        },
        "junkballerRP": {
            "attrs": {
                "min": {
                    "Movement vs LHB": 50,
                    "Movement vs RHB": 50,
                    "Control vs LHB": 45,
                    "Control vs RHB": 45,
                    "Stamina": 10,
                    "Holding Runners": 45,
                    "Pitch 1": 60,
                    "Pitch 2": 50,
                    "Pitch 3": 50,
                    "Pitch 4": 40,
                    "Pitch 5": 40,
                    "Velocity": "90-92"
                },
                "max": {
                    "Movement vs LHB": 95,
                    "Movement vs RHB": 95,
                    "Control vs LHB": 80,
                    "Control vs RHB": 80,
                    "Stamina": 30,
                    "Holding Runners": 90,
                    "Pitch 1": 100,
                    "Pitch 2": 95,
                    "Pitch 3": 90,
                    "Pitch 4": 80,
                    "Pitch 5": 70,
                    "Velocity": "93-95"
                },
                "gb%": 62
            }
        }
    }
}

export { archs };
