use serde::ser::SerializeStruct;

pub enum ErrCode {
    DBNoData,
}

impl ErrCode {
    pub fn as_str(&self) -> &'static str {
        match self {
            ErrCode::DBNoData => "E001001",
        }
    }
}

pub struct CommandError {
    pub error_code: String,
    pub messages: Vec<String>,
}

impl serde::Serialize for CommandError {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::ser::Serializer,
    {
        let mut state = serializer.serialize_struct("CommandError", 2)?;
        state.serialize_field("error_code", &self.error_code)?;
        state.serialize_field("messages", &self.messages)?;
        state.end()
    }
}
