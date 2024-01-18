import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/fixture-config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Packages`, () => {
  test(`should compile readmes for a packages`, () => {
    expectFileToEqual(
      FixtureOutputDir.Packages,
      FixtureOutputFileStrategy.Members,
      'index.md',
    );
    expectFileToEqual(
      FixtureOutputDir.Packages,
      FixtureOutputFileStrategy.Members,
      'package-1/index.md',
      1,
    );
  });

  test(`should compile index page for packages`, () => {
    expectFileToEqual(
      FixtureOutputDir.Packages,
      FixtureOutputFileStrategy.Members,
      ['packages.md'],
    );

    expectFileToEqual(
      FixtureOutputDir.Packages,
      FixtureOutputFileStrategy.Members,
      'package-1/globals.md',
      1,
    );

    expectFileToEqual(
      FixtureOutputDir.Packages,
      FixtureOutputFileStrategy.Members,
      'package-2/modules.md',
      1,
    );
  });

  test(`should compile member page for packages`, () => {
    expectFileToEqual(
      FixtureOutputDir.Packages,
      FixtureOutputFileStrategy.Members,
      ['package-1/interfaces/PackageInterface.md'],
    );
  });

  test(`should compile index for a single package`, () => {
    expectFileToEqual(
      FixtureOutputDir.Package,
      FixtureOutputFileStrategy.Members,
      'README.md',
    );
  });

  test(`should compile member page for a single package`, () => {
    expectFileToEqual(
      FixtureOutputDir.Package,
      FixtureOutputFileStrategy.Members,
      'interfaces/PackageInterface.md',
    );
  });
});
