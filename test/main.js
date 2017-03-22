const expect = require( 'chai' ).expect;
const simplify = require( '../lib/logic-expression-simplify' ).default;

describe( 'Main', () => {
    it( 'a && !a', () => {
        expect( simplify( 'a && !a' ) ).to.be.equal( 'false' );
    } );
    it( 'a || !a', () => {
        expect( simplify( 'a || !a' ) ).to.be.equal( 'true' );
    } );
    it( 'a || !b', () => {
        expect( simplify( 'a || !a' ) ).to.be.equal( 'true' );
    } );
    it( '(a && b) || (!a || b)', () => {
        expect( simplify( '(a && b) || (!a || b)' ) ).to.be.equal( '!a || b' );
    } );
    it( 'a && false', () => {
        expect( simplify( 'a && false' ) ).to.be.equal( 'false' );
    } );
    it( 'b && true', () => {
        expect( simplify( 'b && true' ) ).to.be.equal( 'b' );
    } );
} );
