function isNullOrEmpty(value) {
    if (value != "" || value != null) {
        return false;
    }

    return true;
}

function isValid(value) {
    if (value > 0 || parseFloat(value) > parseFloat(0)) {
        return true;
    }

    return false;
}