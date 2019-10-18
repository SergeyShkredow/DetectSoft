import pg from 'pg'

const createRandomString = () =>
    Math.random().toString(36).substring(2, 15)
const createRandomShortString = () =>
    Math.random().toString(36).substring(2, 10)

export const createTestEmail = () => `${`TEST` + createRandomString()}`

export const generatePass = () => `${createRandomShortString()}`

export const connectPostgre = () => {
    var connectionString = "Dsn=PostgreSQL35W;database=xcstsovj;server=manny.db.elephantsql.com;port=5432;" +
        "uid=xcstsovj;sslmode=disable;readonly=0;protocol=7.4;fakeoidindex=0;showoidcolumn=0;rowversioning=0;" +
        "showsystemtables=0;fetch=100;unknownsizes=0;maxvarcharsize=255;maxlongvarcharsize=8190;debug=0;commlog=0;" +
        "usedeclarefetch=0;textaslongvarchar=1;unknownsaslongvarchar=0;boolsaschar=1;parse=0;lfconversion=1;" +
        "updatablecursors=1;trueisminus1=0;bi=0;byteaaslongvarbinary=1;useserversideprepare=1;lowercaseidentifier=0;" +
        "d6=-101;xaopt=1;pwd=KGkspXepb8z1vWY-biz8xHhm8jas9n4H";
    var client = new pg.Client(connectionString);
    client.connect();
}
export const addUserTable = (login, password) => {
    connectPostgre()
    INSERT INTO emails (login, password)
    VALUES (login, password);
)
}


export default {
    createTestEmail,
    generateUser
}