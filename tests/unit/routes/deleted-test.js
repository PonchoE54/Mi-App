import { module, test } from 'qunit';
import { setupTest } from 'mi-app/tests/helpers';

module('Unit | Route | deleted', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:deleted');
    assert.ok(route);
  });
});
