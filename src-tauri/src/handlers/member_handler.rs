use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Team {
    name: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Member {
    name: String,
    account_id: String,
    avatar_url: String,
    team: Team,
}

#[tauri::command]
pub fn get_members() -> Result<Vec<Member>, String> {
    let m1 = Member {
        name: String::from("member1"),
        account_id: String::from("member_1"),
        avatar_url: String::from("https://i.pravatar.cc/300"),
        team: Team {
            name: String::from("team1"),
        },
    };
    let m2 = Member {
        name: String::from("member2"),
        account_id: String::from("member_2"),
        avatar_url: String::from("https://i.pravatar.cc/301"),
        team: Team {
            name: String::from("team1"),
        },
    };
    let m3 = Member {
        name: String::from("member3"),
        account_id: String::from("member_3"),
        avatar_url: String::from("https://i.pravatar.cc/302"),
        team: Team {
            name: String::from("team1"),
        },
    };
    let m4 = Member {
        name: String::from("member4"),
        account_id: String::from("member_4"),
        avatar_url: String::from("https://i.pravatar.cc/303"),
        team: Team {
            name: String::from("team2"),
        },
    };
    let m5 = Member {
        name: String::from("member5"),
        account_id: String::from("member_5"),
        avatar_url: String::from("https://i.pravatar.cc/304"),
        team: Team {
            name: String::from("team2"),
        },
    };
    let members = vec![m1, m2, m3, m4, m5];
    Ok(members)
}
