use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Member {
    id: i64,
    name: String,
}

#[tauri::command]
pub fn get_members() -> Result<Vec<Member>, String> {
    let m1 = Member {
        id: 1,
        name: String::from("member1"),
    };
    let m2 = Member {
        id: 2,
        name: String::from("member2"),
    };
    let m3 = Member {
        id: 3,
        name: String::from("member3"),
    };
    let members = vec![m1, m2, m3];
    Ok(members)
}
