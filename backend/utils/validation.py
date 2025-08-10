def validate_predict_payload(body):
    if not body or 'symptoms' not in body:
        return ('Missing symptoms field', None)
    symptoms = body.get('symptoms')
    if not isinstance(symptoms, list) or len(symptoms) == 0:
        return ('symptoms must be a non-empty list', None)
    age = body.get('age')
    if age is not None:
        try:
            age = int(age)
            if age <= 0:
                return ('age must be positive', None)
        except:
            return ('age must be an integer', None)
    gender = body.get('gender')
    return (None, {'symptoms': symptoms, 'age': age, 'gender': gender})
