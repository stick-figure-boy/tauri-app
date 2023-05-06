// TODO
#[macro_export]
macro_rules! validate_object {
    ( $type:tt ) => {
        impl $type {
            pub fn get_validation_messages(&self) -> Option<Vec<String>> {
                match &self.validate() {
                    Ok(_) => None,
                    Err(errs) => {
                        let errs_hash = errs.field_errors();
                        let errs_vec: Vec<_> = errs_hash.iter().collect::<Vec<_>>();
                        let mut messages: Vec<String> = Vec::new();
                        let mut validation_errs: String = String::from("");
                        for err in errs_vec {
                            let validate_err = *err.1;
                            for v in validate_err {
                                let m = v.message.as_ref().unwrap().to_string();
                                validation_errs += &*m;
                            }
                            messages
                                .push(String::from(*err.0) + ":" + &validation_errs.to_string());
                        }
                        return Some(messages);
                    }
                }
            }
        }
    };
}
